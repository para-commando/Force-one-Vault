const express = require('express');

const app = express();

const {
  responseTimeMiddleware,
} = require('./Middlewares/Gateway-Middlewares/responseTime.middleware');

const {
  morganMiddleware,
} = require('./Middlewares/Gateway-Middlewares/morgan.middleware');

const {
  helmetMiddleware,
} = require('./Middlewares/Gateway-Middlewares/helmet.middleware');

const {
  authenticateJsonWebToken,
} = require('./Middlewares/Gateway-Middlewares/jwt.middleware');

const {
  ddosMiddleware,
} = require('./Middlewares/Gateway-Middlewares/ddos.middleware');

const {
  corsMiddleware,
} = require('./Middlewares/Gateway-Middlewares/cors.middleware');
require('dotenv').config();

const {
  mongoDatabaseClientConnect,
} = require('../../shared/src/configurations/mongodb.configurations');
const bodyParser = require('body-parser');

app.use(corsMiddleware, (req, res, next) => {
  // calling next middleware in the queue
  next();
});
app.use(responseTimeMiddleware);
app.use(ddosMiddleware.express, (req, res, next) => {
  // calling next middleware in the queue
  next();
});

app.use(morganMiddleware);
app.use(authenticateJsonWebToken);
app.use(helmetMiddleware, (req, res, next) => {
  // calling next middleware in the queue
  next();
});
app.use(bodyParser.json(), (req, res, next) => {
  // calling next middleware in the queue

  next();
});

mongoDatabaseClientConnect();

module.exports = app;
