FROM node:20-alpine AS build

WORKDIR /opt/app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

FROM node:20-alpine

WORKDIR /opt/app

COPY --from=build /opt/app/package*.json ./
RUN npm install --omit=dev

COPY --from=build /opt/app/dist ./dist

ENV NODE_ENV=production
ENV HOST=0.0.0.0
ENV PORT=4321

EXPOSE 4321

CMD ["node", "./dist/server/entry.mjs"]
