'use strict';

const mongoose = require('mongoose');

const transformationSchema = new mongoose.Schema({
  title:        { type: String, required: true },
  description:  { type: String },
  photos:       { type: mongoose.Schema.ObjectId, ref: 'Photo' },
  lastUpdated:  { type: Date },
  createdAt:    { type: Date, default: Date.now, required: true }
});

transformationSchema.statics.create = (transformation, cb) => {
  console.log('in the transformation create model method');
};

const Transformation = new mongoose.model('Transformation', transformationSchema);
module.exports = Transformation;