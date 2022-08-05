require('dotenv').config();
const express = require('express');
const app = express();
// const PORT  = process.env.PORT || 3000;
const cors = require('cors');
const bodyParser = require('body-parser');
const router = require('./src/routers');
const middleError = require('./src/middlewares/error');

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

app.listen(3000, () => {
  console.log(`App listening on port 3000`);
});
