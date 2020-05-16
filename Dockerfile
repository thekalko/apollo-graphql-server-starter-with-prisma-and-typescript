FROM node:erbium-alpine
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY package.json .
COPY yarn.lock .
RUN yarn
COPY . .
RUN mv .env.production .env
ENV NODE_ENV=production
CMD ["node", "src/index.js"]