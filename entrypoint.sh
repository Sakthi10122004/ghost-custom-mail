#!/bin/sh

# 1. Ensure MySQL socket runtime directories exist with correct permissions
mkdir -p /run/mysqld
chown -R mysql:mysql /run/mysqld
chown -R mysql:mysql /var/lib/mysql

# 2. Start the MariaDB/MySQL daemon in the background
echo "Starting internal MariaDB server..."
mysqld_safe --datadir='/var/lib/mysql' --user=mysql &

# 3. Wait a few seconds for the database engine to finish booting up safely
sleep 5

# 4. Initialize the custom database schema bypassing TLS/SSL checks (--ssl=0)
echo "Initializing Ghost application schemas..."
mysql --ssl=0 -e "CREATE DATABASE IF NOT EXISTS ghost_internal;"
mysql --ssl=0 -e "ALTER USER 'root'@'localhost' IDENTIFIED BY 'root';"
mysql --ssl=0 -e "CREATE USER IF NOT EXISTS 'ghost'@'127.0.0.1' IDENTIFIED BY 'root';"
mysql --ssl=0 -e "GRANT ALL PRIVILEGES ON ghost_internal.* TO 'ghost'@'127.0.0.1';"
mysql --ssl=0 -e "FLUSH PRIVILEGES;"

# 5. Shift permissions back to the standard node user context for safety
chown -R node:node /var/lib/ghost

# 6. Hands off execution back to the standard Ghost bootloader processes
echo "Booting Ghost Web Application Layer..."
exec node /var/lib/ghost/current/index.js