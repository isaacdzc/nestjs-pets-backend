FROM node:22-alpine

RUN npm install -g pnpm

WORKDIR /usr/src/app

COPY package.json pnpm-lock.yaml ./

RUN pnpm install --ignore-scripts

COPY . .

RUN pnpm build

EXPOSE 3000

CMD ["pnpm", "run", "start:prod"]
