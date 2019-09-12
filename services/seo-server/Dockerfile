FROM node:10.16.3-alpine
WORKDIR /app/
COPY . .
RUN yarn
ENV POST=8088
EXPOSE 8088
CMD ["yarn", "start"]
