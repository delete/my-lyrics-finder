'use strict';

let express = require('express');
let consign = require('consign');

const app = express();


consign()
  .include("models")
  .then("libs/middlewares.js")
  .then("routes")
  .then("libs/boot.js")
  .into(app);


