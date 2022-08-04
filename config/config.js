require('dotenv').config();

module.exports = {
  development: {
    host: '127.0.0.1',
    dialect: 'mysql',
    DB_PORT: process.env.DB_PORT,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    logging: false,
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