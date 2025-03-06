FROM node:slim

WORKDIR /app

COPY package.json /app/

RUN npm install

COPY . /app

RUN npm run build

ENV  NODE_ENVIRONEMENT=production

EXPOSE 4173

CMD ["bun", "preview", "--host", "0.0.0.0"]