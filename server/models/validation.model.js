'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// validate email for mongoose
require('mongoose-type-email');

const validateSchema = new Schema({
  name: {type: String, required: true, unique: true},
  date: {type: Date, default: Date.now},
  description: {type: String, required: true},
  email: {type: mongoose.SchemaTypes.Email,}
})

module.exports = mongoose.model('Validates', validateSchema)