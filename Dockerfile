FROM node:12 as marcobrunodev-api
WORKDIR /api
COPY . ./
RUN npm i --silent