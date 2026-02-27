FROM node:20-alpine AS build

# Installing libvips-dev for sharp Compatibility
RUN apk update && apk add --no-cache build-base gcc autoconf automake zlib-dev libpng-dev vips-dev > /dev/null 2>&1

WORKDIR /opt/
COPY package.json ./
RUN npm install

WORKDIR /opt/app
COPY . .
RUN cp -a /opt/node_modules ./

RUN npm run build

FROM node:20-alpine

# Installing libvips-dev for sharp Compatibility
RUN apk update && apk add --no-cache vips-dev > /dev/null 2>&1

WORKDIR /opt/app
COPY --from=build /opt/node_modules ./node_modules
COPY --from=build /opt/app ./
ENV PATH=/opt/node_modules/.bin:$PATH

RUN chown -R node:node /opt/app
USER node

EXPOSE 1337

CMD ["npm", "run", "start"]
