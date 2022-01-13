'use strict';

const { Schema, model } = require('mongoose');

const dialogSchema = new Schema({
  user1Id: String,
  user2Id: String,
  chatId: String,
});

const Dialog = model('Dialog', dialogSchema);

module.exports = Dialog;
