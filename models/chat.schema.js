'use strict';

const { Schema, model } = require('mongoose');

const chatSchema = new Schema({
  serverId: String,
  type: String,
});

const Chat = model('Chat', chatSchema);

module.exports = Chat;
