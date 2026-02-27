FROM node:20-alpine AS build

# Install build dependencies required by sharp/vips
RUN apk update && apk add --no-cache build-base gcc autoconf automake zlib-dev libpng-dev vips-dev > /dev/null 2>&1

WORKDIR /opt/

# Copy root workspace package files
COPY package.json package-lock.json ./
COPY cms/package.json ./cms/
COPY astro-web/package.json ./astro-web/

# Install dependencies using lockfile
RUN npm ci

# Copy the rest of the application
COPY . .

# Build only the CMS workspace
RUN npm run build --workspace cms

FROM node:20-alpine

# Install runtime dependencies for sharp
RUN apk update && apk add --no-cache vips-dev > /dev/null 2>&1

WORKDIR /opt/app

# Copy the built CMS node_modules and code from the builder
COPY --from=build /opt/node_modules ./node_modules
COPY --from=build /opt/cms ./

ENV PATH=/opt/app/node_modules/.bin:$PATH

RUN chown -R node:node /opt/app
USER node

EXPOSE 1337

CMD ["npm", "run", "start"]
