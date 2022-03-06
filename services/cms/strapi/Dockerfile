FROM node:14-alpine
RUN apk update && apk add build-base gcc autoconf automake zlib-dev libpng-dev nasm bash vips-dev

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}
WORKDIR /app
COPY . .
RUN yarn
EXPOSE 1377
CMD ["yarn", "develop"]
