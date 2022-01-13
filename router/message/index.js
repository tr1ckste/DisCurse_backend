'use strict';

const Message = require('../../models/message.schema');
const { findByArgs, createInstance } = require('../../lib/mongo/functions');

module.exports = [
  {
    method: 'get',
    handler: async (req, res) => {
      const { chatId, userId, data } = req.query;
      const result = await findByArgs({ chatId, userId, data }, Message);
      const response = JSON.stringify(result);
      res.end(response);
    },
  },
  {
    method: 'post',
    handler: async (req, res) => {
      const { userId, chatId, content, data } = req.body;
      const result = await createInstance(
        { userId, chatId, content, data }, Message,
      );
      const response = JSON.stringify(result);
      res.end(response);
    },
  },
];
