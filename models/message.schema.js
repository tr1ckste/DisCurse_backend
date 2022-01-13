'use strict';

const { Schema, model } = require('mongoose');

const messageSchema = new Schema({
  content: String,
  chatId: String,
  userId: String,
  date: String,
});

const Message = model('Message', messageSchema);

module.exports = Message;
