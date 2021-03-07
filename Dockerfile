FROM node:14.16.0-alpine

WORKDIR /app

RUN npm install && \
    npm install -g @vue/cli

EXPOSE 8080