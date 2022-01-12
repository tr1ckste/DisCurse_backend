'use strict';

const { Schema, model } = require('mongoose');

const userSchema = new Schema({
  login: String,
  password: String,
  outerId: String,
  servers: Array,
});

const User = model('User', userSchema);

module.exports = User;
