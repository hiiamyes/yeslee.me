FROM node:12.16.1-alpine
WORKDIR /app/
COPY . .
RUN yarn
RUN yarn build
EXPOSE 8088
CMD ["yarn", "start"]
