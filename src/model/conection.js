require('dotenv').config();

if(process.env.NODE_ENV === 'development') {
  NODE_ENV='development'
}


const mysql = require('mysql2');
const connection = mysql.createConnection(process.env.DATABASE_URL);

module.exports = connection;
