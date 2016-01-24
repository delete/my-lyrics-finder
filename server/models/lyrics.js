'use strict'

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const lyricsSchema = new Schema({
  art: String,
  mus: String
//  type: String,
//  art: {
//    id: String,
//    name: String,
//    url: String
//  },
//  mus: [{
//    id: String,
//    name: String,
//    url: String,
//    text: String,
//    translate: [{
//      id: String,
//      url: String,
//      text: String
//    }]
//  }]
});

module.exports = mongoose.model('Lyrics', lyricsSchema);

