FROM node:alpine

# Could be troublesome
WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY package.json ./

RUN npm install

COPY . ./


CMD ["npm", "start"]
EXPOSE 3000
