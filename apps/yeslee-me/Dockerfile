FROM node:20-slim
WORKDIR /app/
COPY package.json pnpm-lock.yaml ./
RUN npm install -g pnpm
RUN pnpm install --frozen-lockfile && npm install pm2 -g
COPY . .
RUN pnpm build
EXPOSE 8089
CMD ["pm2-runtime", "start", "ecosystem.config.cjs"]
