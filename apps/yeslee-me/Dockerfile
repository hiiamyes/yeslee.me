FROM node:20-slim
WORKDIR /app/
COPY . .
# RUN apt-get update && apt-get install -y \
#   git &&
#   npm install pm2 -g &&
#   rm -rf /var/lib/apt/lists/*
RUN npm install pm2 -g
RUN yarn
RUN yarn build
EXPOSE 8089
CMD ["pm2-runtime", "start", "ecosystem.config.cjs"]
