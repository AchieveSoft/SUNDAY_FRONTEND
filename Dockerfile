FROM oven/bun:latest

WORKDIR /app

COPY . /app

RUN bun i
RUN bun run build

ENV  NODE_ENVIRONEMENT=production

EXPOSE 4173

CMD ["bun", "preview", "--host", "0.0.0.0"]