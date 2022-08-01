require('dotenv').config();
const express = require('express');
const app = express();
const PORT  = 3000;
const cors = require('cors');
const bodyParser = require('body-parser');
const router = require('./src/routers');
const middleError = require('./src/middlewares/error');

const mysql = require('mysql2');

const connection = mysql.createConnection(process.env.DATABASE_URL);

if(connection) {
  console.log('Connected to PlanetScale!');
}


app.use(
  cors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true,
  }),
);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', router);
app.use(middleError);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
