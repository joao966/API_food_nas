FROM node:10

WORKDIR /usr/local

COPY package*.json ./
RUN npm install && npm cache clean --force
ENV PATH=/usr/local/node_modules/.bin:$PATH

COPY . .

CMD ["npm", "start"]
