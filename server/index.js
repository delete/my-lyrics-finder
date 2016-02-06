'use strict';

const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

const URL = 'mongodb://192.168.1.8:27017/data'

const PORT = 8080;

var MONGO_DB;
const DOCKER_DB = process.env.DB_PORT;

if ( DOCKER_DB ) {
    MONGO_DB = DOCKER_DB.replace( 'tcp', 'mongodb' ) + '/data';
} else {
    MONGO_DB = process.env.MONGODB;
}
mongoose.connect(MONGO_DB || URL);

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.set('json spaces', 4);

require('./routes')(app);

app.listen(process.env.PORT || PORT, () => {
  console.log(`List on port: ${PORT}`);
});
