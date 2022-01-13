'use strict';

const Dialog = require('../../models/dialog.schema');
const { findByArgs, createInstance } = require('../../lib/mongo/functions');

module.exports = [
  {
    method: 'get',
    handler: async (req, res) => {
      const { user1Id, user2Id, chatId, _id } = req.query;
      const result = await findByArgs(
        { user1Id, user2Id, chatId, _id }, Dialog,
      );
      const response = JSON.stringify(result);
      res.end(response);
    },
  },
  {
    method: 'post',
    handler: async (req, res) => {
      const { user1Id, user2Id, chatId } = req.body;
      const result = await createInstance(
        { user1Id, user2Id, chatId }, Dialog,
      );
      const response = JSON.stringify(result);
      res.end(response);
    },
  },
];
