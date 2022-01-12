'use strict';

require('dotenv').config({ path: './.env' });

const express = require('express');
const mongoose = require('mongoose');
const fs = require('fs');

const app = express();
const { DB_PASS, DB_LOGIN, DB_NAME } = process.env;
const mongoDB = `mongodb+srv://${DB_LOGIN}:${DB_PASS}@cluster0.kaz3t.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`;

const PORT = 3000;
const ROUTER_PATH = './router';
const ROUTER_PATH_LENGTH = ROUTER_PATH.length;
const ROUTES = [];

const buildRouter = (fsPath, routes) => {
  const fileNames = fs.readdirSync(fsPath);
  fileNames.forEach(fileName => {
    if (fileName === 'index.js') {
      const serverPath = fsPath.slice(ROUTER_PATH_LENGTH) ?
        fsPath.slice(ROUTER_PATH_LENGTH) : '/';
      const requests = require(fsPath);
      routes.push({
        path: serverPath,
        requests,
      });
      return;
    }
    buildRouter(fsPath + '/' + fileName, routes);
  });
  return routes;
};

buildRouter(ROUTER_PATH, ROUTES);

app.use(express.json());

for (const route of ROUTES) {
  const { path, requests } = route;
  for (const request of requests) {
    const { method, handler } = request;
    app[method](path, handler);
    console.log('\x1b[32m', 'Endpoint generated:');
    console.log('\x1b[37m', `\tPath: ${path}`);
    console.log(`\tType: ${method}`);
  }
}

app.listen(PORT, async () => {
  await mongoose.connect(mongoDB);
  console.log('app listening at http://localhost:' + PORT);
});
