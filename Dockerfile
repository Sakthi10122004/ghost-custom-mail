# 1. Use the stable Ghost Alpine image
FROM ghost:6-alpine

# 2. Set environment settings with your exact credentials
ENV NODE_ENV=production
ENV url=http://localhost:2368
ENV database__client=mysql
ENV database__connection__host=127.0.0.1
ENV database__connection__user=ghost
ENV database__connection__password=root
ENV database__connection__database=ghost_internal

# 3. Inject your custom email management dashboard files
COPY ./versions/6.41.0/core/server/web/admin/app.js /var/lib/ghost/versions/6.41.0/core/server/web/admin/app.js
COPY ./versions/6.41.0/core/server/web/admin/controller.js /var/lib/ghost/versions/6.41.0/core/server/web/admin/controller.js

# Also duplicate to 6.39.0 to handle entrypoint fallbacks safely
COPY ./versions/6.41.0/core/server/web/admin/app.js /var/lib/ghost/versions/6.39.0/core/server/web/admin/app.js
COPY ./versions/6.41.0/core/server/web/admin/controller.js /var/lib/ghost/versions/6.39.0/core/server/web/admin/controller.js

# 4. Switch to root to install MariaDB packages
USER root

# Install mariadb, mariadb-client, and openrc (required to manage services on Alpine)
RUN apk update && apk add --no-cache mariadb mariadb-client openrc \
    && mysql_install_db --user=mysql --datadir=/var/lib/mysql

# 5. Copy the entrypoint automation startup script
COPY entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh

EXPOSE 2368

# Run our custom entrypoint script on boot
ENTRYPOINT ["/entrypoint.sh"]