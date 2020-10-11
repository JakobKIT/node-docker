FROM node:latest

WORKDIR /usr/src/app
COPY package*.json ./
ENV PORT 5000

RUN npm cache clear --force && npm install

ENTRYPOINT ["npm", "start"]
