FROM node:10.16.3-alpine
WORKDIR /app/
COPY . .
RUN yarn
RUN yarn build
EXPOSE 8088
CMD ["yarn", "start"]
