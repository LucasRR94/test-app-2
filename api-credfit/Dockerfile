FROM node:18

WORKDIR /app

RUN npm i -g @nestjs/cli

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3001

CMD ["npm","run" ,"start:dev"]

