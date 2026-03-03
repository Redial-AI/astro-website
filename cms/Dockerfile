FROM node:20-alpine

WORKDIR /opt/app

# Install only what is needed to compile native modules during build.
# Keep runtime lean by removing build deps afterward.
RUN apk add --no-cache --virtual .build-deps build-base python3 make g++ \
    && apk add --no-cache vips

# Keep the build context local to /cms so Coolify can build this service directly.
COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build \
    && npm prune --omit=dev \
    && apk del .build-deps

ENV NODE_ENV=production
ENV PATH=/opt/app/node_modules/.bin:$PATH

RUN chown -R node:node /opt/app
USER node

EXPOSE 1337

CMD ["npm", "run", "start"]
