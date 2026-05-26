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

# 4. Switch to root to configure system layers
USER root

# 5. Install mariadb and initialize system database structures
RUN apk update && apk add --no-cache mariadb mariadb-client openrc su-exec \
    && mysql_install_db --user=mysql --datadir=/var/lib/mysql

# 6. Copy the entrypoint automation startup script
COPY entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh

# 7. PERMANENT FIX: Create missing directory runtime schemas AND re-own 
# the 82,385 files over to the respective execution users during the BUILD phase
RUN mkdir -p /var/lib/ghost/content/logs /run/mysqld \
    && chown -R node:node /var/lib/ghost \
    && chown -R mysql:mysql /var/lib/mysql /run/mysqld

EXPOSE 2368

ENTRYPOINT ["/entrypoint.sh"]