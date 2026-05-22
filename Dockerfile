# 1. Use the stable Ghost Alpine image
FROM ghost:6-alpine

# 2. Force Ghost to use its built-in internal SQLite database instead of external MySQL
ENV NODE_ENV=development
ENV url=http://localhost:2368

# 3. Inject your custom email management dashboard files
COPY ./versions/6.41.0/core/server/web/admin/app.js /var/lib/ghost/versions/6.41.0/core/server/web/admin/app.js
COPY ./versions/6.41.0/core/server/web/admin/controller.js /var/lib/ghost/versions/6.41.0/core/server/web/admin/controller.js

# 4. Switch to root temporarily to fix permissions and directories
USER root

# 5. Force Ghost to use 6.41.0 by removing the old version and resetting the symlink
RUN rm -rf /var/lib/ghost/versions/6.39.0 \
    && rm -f /var/lib/ghost/current \
    && ln -s /var/lib/ghost/versions/6.41.0 /var/lib/ghost/current \
    && chown -R node:node /var/lib/ghost/current

# 6. Switch back to the safe node user context
USER node

# 7. Open up the default network port
EXPOSE 2368

CMD ["node", "current/index.js"]