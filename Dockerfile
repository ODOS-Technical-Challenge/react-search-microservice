FROM node:16.13.2-alpine3.15

WORKDIR /app

COPY ./.nginx/nginx.conf /etc/nginx/nginx.conf
## Remove default nginx index page
RUN rm -rf /usr/share/nginx/html/*

COPY package.json ./

RUN yarn install

COPY . .

RUN yarn run build

# Copy from the stage 1
COPY build /usr/share/nginx/html


CMD ["nginx", "-g", "daemon off;"]