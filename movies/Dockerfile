FROM node:8.11.1-alpine

LABEL maintainer="robertoachar@gmail.com"

WORKDIR /usr/src/app

VOLUME [ "/usr/src/app" ]

RUN npm i -g nodemon

ENV NODE_ENV=development
ENV DATABASE=mongodb://mongodb:27017/gateway-movies
ENV PORT=4000

EXPOSE 4000

CMD [ "nodemon", "-L", "src/index.js"]
