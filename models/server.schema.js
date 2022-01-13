'use strict';

const { Schema, model } = require('mongoose');

const serverSchema = new Schema({
  userIds: Array,
  permisions: Object,
  chatId: String,
});

const Server = model('Server', serverSchema);

module.exports = Server;
