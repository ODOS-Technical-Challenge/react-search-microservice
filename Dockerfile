FROM node:16.13.2-alpine3.15

WORKDIR /app

COPY package.json ./

RUN yarn install

COPY . .

RUN yarn run build

CMD ["nginx", "-g", "daemon off;"]