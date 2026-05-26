#!/bin/sh

# 1. Ensure MySQL socket runtime directories exist with correct permissions
mkdir -p /run/mysqld
chown -R mysql:mysql /run/mysqld
chown -R mysql:mysql /var/lib/mysql

# 2. Check if database is initialized. If not, initialize it.
if [ ! -d "/var/lib/mysql/mysql" ]; then
    echo "First time database setup. Initializing data directory..."
    mysql_install_db --user=mysql --datadir=/var/lib/mysql
fi

# 3. Start the MariaDB daemon in the background explicitly listening on localhost
echo "Starting internal MariaDB server..."
mysqld_safe --datadir='/var/lib/mysql' --user=mysql --bind-address=127.0.0.1 &

# 4. Wait for MariaDB to fully wake up and open its port
echo "Waiting for MariaDB to start..."
for i in {1..10}; do
    if mysqladmin ping --silent; then
        break
    fi
    sleep 1
done

# 5. Safe Schema Initialization
echo "Configuring users and schemas..."
# Create database if it doesn't exist
mysql -e "CREATE DATABASE IF NOT EXISTS ghost_internal;"

# Create the 'ghost' user with password 'root' safely
mysql -e "CREATE USER IF NOT EXISTS 'ghost'@'127.0.0.1' IDENTIFIED BY 'root';"
mysql -e "GRANT ALL PRIVILEGES ON ghost_internal.* TO 'ghost'@'127.0.0.1';"
mysql -e "FLUSH PRIVILEGES;"

# Set root password securely only if it hasn't been changed yet
mysqladmin -u root password 'root' 2>/dev/null || echo "Root password already configured."

# 6. Ensure Ghost log/content directories exist with correct node permissions
mkdir -p /var/lib/ghost/content/logs
chown -R node:node /var/lib/ghost

# 7. Shift execution to Ghost
echo "Booting Ghost Web Application Layer..."
exec node /var/lib/ghost/current/index.js