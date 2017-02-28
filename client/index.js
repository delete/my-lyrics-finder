'use strict';

const express = require('express');
const path = require('path');

const app = express();
const rootPath = path.normalize(__dirname);

app.use(express.static(rootPath + '/dist'));

const port = 8081;

app.listen(port, (err) => console.log('Client listening on 8081'));
