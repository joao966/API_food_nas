FROM node:10

WORKDIR /data_sistema

COPY package.json .
RUN npm install

COPY . .

CMD ["npm", "start"]
