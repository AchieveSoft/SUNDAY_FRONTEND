FROM node:slim

WORKDIR /app

COPY package.json /app/

RUN npm install -g pnpm
RUN npm install

COPY . /app

RUN pnpm build

ENV  NODE_ENVIRONEMENT=production

EXPOSE 4173

CMD ["pnpm", "preview", "--host", "0.0.0.0"]