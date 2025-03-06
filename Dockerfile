FROM oven/bun:latest

WORKDIR /app

COPY package.json /app/

RUN bun install

COPY . /app

RUN bun run build

ENV  NODE_ENVIRONEMENT=production

EXPOSE 4173

CMD ["bun", "preview", "--host", "0.0.0.0"]