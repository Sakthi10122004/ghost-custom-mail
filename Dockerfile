# 1. Use the stable Ghost Alpine image
FROM ghost:6-alpine

# 2. Set default environment settings
ENV NODE_ENV=development
ENV url=http://localhost:2368

# 3. Inject your custom email management dashboard files directly into the base layers
COPY ./versions/6.41.0/core/server/web/admin/app.js /var/lib/ghost/versions/6.41.0/core/server/web/admin/app.js
COPY ./versions/6.41.0/core/server/web/admin/controller.js /var/lib/ghost/versions/6.41.0/core/server/web/admin/controller.js

# 4. Open up the default network port
EXPOSE 2368