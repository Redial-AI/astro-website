FROM node:20-alpine AS build

# Build deps for sharp/vips
RUN apk add --no-cache build-base gcc autoconf automake zlib-dev libpng-dev vips-dev

WORKDIR /opt/app

# Keep the build context local to /cms so Coolify can build this service directly.
COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

FROM node:20-alpine

# Runtime dependency for sharp
RUN apk add --no-cache vips-dev

WORKDIR /opt/app

COPY --from=build /opt/app ./

ENV NODE_ENV=production
ENV PATH=/opt/app/node_modules/.bin:$PATH

RUN chown -R node:node /opt/app
USER node

EXPOSE 1337

CMD ["npm", "run", "start"]
