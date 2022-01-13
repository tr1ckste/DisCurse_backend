'use strict';

const Server = require('../../models/server.schema');
const { findByArgs, createInstance } = require('../../lib/mongo/functions');

module.exports = [
  {
    method: 'get',
    handler: async (req, res) => {
      const { _id } = req.query;
      const result = await findByArgs({ _id }, Server);
      const response = JSON.stringify(result);
      res.end(response);
    },
  },
  {
    method: 'post',
    handler: async (req, res) => {
      const { userIds, permisions, chatId } = req.body;
      const result = await createInstance(
        { userIds, permisions, chatId }, Server,
      );
      const response = JSON.stringify(result);
      res.end(response);
    },
  },
];
