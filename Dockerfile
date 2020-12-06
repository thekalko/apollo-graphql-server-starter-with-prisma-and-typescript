FROM node:12.18.0-alpine
WORKDIR /usr/src/app
COPY . .
RUN mv .env.production .env
RUN yarn install
RUN yarn build
CMD [ "yarn", "start" ]
EXPOSE 4000