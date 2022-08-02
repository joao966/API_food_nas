require('dotenv').config();

module.exports = {
  development: {
    username: process.env.MYSQL_ROOT,
    password: process.env.MYSQL_ROOT_PASSWORD,
    database: process.env.MYSQL_DATABASE,
    host: process.env.HOSTNAME,
    port: process.env.MYSQL_PORT,
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
    port: process.env.MYSQL_PORT,
    dialect: 'mysql',
  },
};