FROM node:20-slim
WORKDIR /app/
COPY package.json yarn.lock* ./
RUN yarn install --frozen-lockfile && npm install pm2 -g
COPY . .
RUN yarn build
EXPOSE 8089
CMD ["pm2-runtime", "start", "ecosystem.config.cjs"]
