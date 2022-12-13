FROM node:18.10-alpine

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY package*.json ./

CMD ["npm", "install"]
EXPOSE 3000

CMD ["npm", "start"]
