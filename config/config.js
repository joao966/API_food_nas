require('dotenv').config();

module.exports = {
  development: {
    username: 'root',
    password: 'password',
    database: 'food_nas',
    host: '127.0.0.1',
    dialect: 'mysql',
  },
  test: {
    username:'',
    password: '',
    database: '',
    host: '',
    dialect: '',
  },
  production: {
    username: process.env.MYSQL_ROOT,
    password: process.env.MYSQL_ROOT_PASSWORD,
    database: 'idw',
    host: process.env.HOSTNAME,
    dialect: 'mysql',
  },
};