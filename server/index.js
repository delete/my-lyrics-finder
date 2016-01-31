'use strict';

const express = require('express');
const consign = require('consign');
const morgan = require('morgan');
const app = express();
const bodyParser = require('body-parser');

const mongoose = require('mongoose');

let url = 'mongodb://192.168.1.8:27017/data'
mongoose.connect(url);

const PORT = 8080;
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.set('json spaces', 4);

require('./routes')(app);

app.listen(PORT, () => {
  console.log(`List on port: ${PORT}`);
});
