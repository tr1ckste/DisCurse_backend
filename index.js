'use strict';

const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config({ path: './.env' });

const Test = require('./models/test.schema');

const app = express();
const PORT = 3000;

const { DB_PASS, DB_LOGIN, DB_NAME } = process.env;
const mongoDB = `mongodb+srv://${DB_LOGIN}:${DB_PASS}@cluster0.kaz3t.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('hi ksta');
});

app.post('/test', async (req, res) => {
  const { name } = req.body;
  const test = new Test({ name });
  const result = await test.save(err => err);
  res.end(result);
});

app.get('/test', async (req, res) => {
  const { name } = req.query;
  console.log(req.query);
  console.log(name);
  const test = await Test.find({ name });
  const response = JSON.stringify(test);
  res.json(response);
});

app.listen(PORT, async () => {
  await mongoose.connect(mongoDB);
  console.log('app listening at http://localhost:' + PORT);
});
