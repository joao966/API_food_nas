require('dotenv').config();

module.exports = {
  development: {
    username: process.env.MYSQL_USER_DEVELOP,
    password: process.env.MYSQL_PASSWORD_DEVELOP,
    database: process.env.MYSQL_DATABASE,
    host: process.env.HOSTNAME_DEVELOP,
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
    username: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: 'idw',
    host: process.env.HOSTNAME,
    dialect: 'mysql',
  },
};