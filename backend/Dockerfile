FROM node:20.16.0-alpine

WORKDIR /usr/src/app

COPY *.json ./

RUN npm ci --production 

COPY . .

EXPOSE 5000

USER node

ENTRYPOINT [ "node", "index.js" ]