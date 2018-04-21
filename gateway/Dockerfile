FROM node:8.11.1-alpine

LABEL maintainer="robertoachar@gmail.com"

WORKDIR /usr/src/app

VOLUME [ "/usr/src/app" ]

RUN npm i -g nodemon

ENV NODE_ENV=development
ENV PORT=5000
ENV HEROES=http://heroes:3000/api/heroes
ENV MOVIES=http://movies:4000/api/movies

EXPOSE 5000

CMD [ "nodemon", "-L", "src/index.js"]
