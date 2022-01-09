'use strict';

const { Schema, model } = require('mongoose');

const testSchema = new Schema({
  name: String,
});

const Test = model('Test', testSchema);

module.exports = Test;
