'use strict';

const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config({ path: './.env' });

const app = express();
const PORT = 3000;

const { DB_PASS, DB_LOGIN, DB_NAME } = process.env;
const mongoDB = `mongodb+srv://${DB_LOGIN}:${DB_PASS}@cluster0.kaz3t.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`;

app.get('/', (req, res) => {
  res.send('hi ksta');
});

app.listen(PORT, async () => {
  await mongoose.connect(mongoDB);
  console.log('app listening at http://localhost:' + PORT);
});
