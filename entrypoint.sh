#!/bin/sh

# 1. Ensure runtime directories exist with correct permissions
mkdir -p /run/mysqld /var/lib/ghost/content/logs
chown -R mysql:mysql /run/mysqld

# 2. Start the MariaDB daemon in the background
mariadbd-safe --datadir='/var/lib/mysql' --user=mysql --bind-address=127.0.0.1 --skip-networking=0 &

# 3. Give MariaDB a stable window to create its socket file
echo "Waiting 8 seconds for MariaDB engine to stabilize..."
sleep 8

# 4. Safe Schema Initialization
echo "Configuring users and schemas..."
mysql --socket=/run/mysqld/mysqld.sock -e "CREATE DATABASE IF NOT EXISTS ghost_internal;" 2>/dev/null || true
mysql --socket=/run/mysqld/mysqld.sock -e "CREATE USER IF NOT EXISTS 'ghost'@'127.0.0.1' IDENTIFIED BY 'root';" 2>/dev/null || true
mysql --socket=/run/mysqld/mysqld.sock -e "GRANT ALL PRIVILEGES ON ghost_internal.* TO 'ghost'@'127.0.0.1';" 2>/dev/null || true
mysql --socket=/run/mysqld/mysqld.sock -e "FLUSH PRIVILEGES;" 2>/dev/null || true
mysql --socket=/run/mysqld/mysqld.sock -u root -e "ALTER USER 'root'@'localhost' IDENTIFIED BY 'root';" 2>/dev/null || true

echo "Database configuration phase finalized successfully."

# 5. Boot Ghost SECURELY as the 'node' user instantly (No runtime chown!)
echo "Booting Ghost Web Application Layer..."
exec su-exec node node /var/lib/ghost/current/index.js