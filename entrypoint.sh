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

# 4. Give MariaDB an explicit window to fully wake up and create its socket file
echo "Waiting 8 seconds for MariaDB engine to stabilize..."
sleep 8

# 5. Safe Schema Initialization using explicit socket connection paths
echo "Configuring users and schemas..."
mysql --socket=/run/mysqld/mysqld.sock -e "CREATE DATABASE IF NOT EXISTS ghost_internal;"
mysql --socket=/run/mysqld/mysqld.sock -e "CREATE USER IF NOT EXISTS 'ghost'@'127.0.0.1' IDENTIFIED BY 'root';"
mysql --socket=/run/mysqld/mysqld.sock -e "GRANT ALL PRIVILEGES ON ghost_internal.* TO 'ghost'@'127.0.0.1';"
mysql --socket=/run/mysqld/mysqld.sock -e "FLUSH PRIVILEGES;"

# Change the root password LAST so it doesn't lock us out of the commands above
mysql --socket=/run/mysqld/mysqld.sock -e "ALTER USER 'root'@'localhost' IDENTIFIED BY 'root';" || echo "Root password already set."

# 6. Ensure Ghost log/content directories exist with correct node permissions
mkdir -p /var/lib/ghost/content/logs
chown -R node:node /var/lib/ghost

# 7. Shift execution to Ghost
echo "Booting Ghost Web Application Layer..."
exec node /var/lib/ghost/current/index.js