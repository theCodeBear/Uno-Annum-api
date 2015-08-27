'use strict';

const mongoose = require('mongoose');

const photoSchema = new mongoose.Schema({
  photoUrl:     { type: String, required: true },
  note:         { type: String },
  createdAt:    { type: Date, default: Date.now, required: true }
});

photoSchema.statics.create = (photo, cb) => {
  console.log('in the photo create model method');
};

const Photo = mongoose.model('Photo', photoSchema);
module.exports = Photo;