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

# ... (Keep your top setup layers exactly the same) ...

# Switch to root to configure system layers
USER root

# Install mariadb and initialize data directories
RUN apk update && apk add --no-cache mariadb mariadb-client openrc \
    && mysql_install_db --user=mysql --datadir=/var/lib/mysql

# Copy the entrypoint automation startup script
COPY entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh

# PERMANENT FIX: Re-own files ONCE during the image BUILD phase
RUN mkdir -p /var/lib/ghost/content/logs \
    && chown -R node:node /var/lib/ghost \
    && chown -R mysql:mysql /var/lib/mysql /run/mysqld

EXPOSE 2368

ENTRYPOINT ["/entrypoint.sh"]