'use strict';

const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

const URL = 'mongodb://192.168.1.8:27017/data'

const PORT = 8080;

mongoose.connect(URL);

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.set('json spaces', 4);

require('./routes')(app);

app.listen(PORT, () => {
  console.log(`List on port: ${PORT}`);
});
