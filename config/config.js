require('dotenv').config();

module.exports = {
  development: {
    username: process.env.MYSQL_USER_DEVELOP,
    password: process.env.MYSQL_PASSWORD_DEVELOP,
    database: 'food_nas',
    host: process.env.HOSTNAME_DEVELOP,
    dialect: 'postgres',
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
    dialect: 'mysql2',
  },
};