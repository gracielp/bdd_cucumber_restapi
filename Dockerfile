FROM node:14.16.1

LABEL author="gpablo"

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . ./

CMD [ "npm", "start" ]
