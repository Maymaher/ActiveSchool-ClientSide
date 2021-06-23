FROM node:14.16.0-alpine

RUN mkdir -p /usr/src/schoolapp

WORKDIR /usr/src/schoolapp

COPY package*.json ./

RUN npm ci

RUN npm audit fix

RUN npm install -g @angular/cli@11.2.12

COPY . .

EXPOSE 4200

CMD [ "ng", "serve", "--host", "0.0.0.0", "--disableHostCheck" ]
