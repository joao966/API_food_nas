FROM node:10

WORKDIR /app

COPY package.json .
RUN npm install

COPY . .

# RUN npx sequelize db:create
# RUN npx sequelize db:migrate
# RUN npx sequelize db:seed:all


CMD ["npm", "start"]
