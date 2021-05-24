const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const {estrategiasAutenticacao} = require('./src/usuarios')

app.use(
  bodyParser.urlencoded({
    extended: true
  }),
  bodyParser.json()
);

module.exports = app;
