'use strict';

const Chat = require('../../models/chat.schema');
const { findByArgs, createInstance } = require('../../lib/mongo/functions');

module.exports = [
  {
    method: 'get',
    handler: async (req, res) => {
      const { serverId, type, _id } = req.query;
      const result = await findByArgs({ serverId, type, _id }, Chat);
      const response = JSON.stringify(result);
      res.end(response);
    },
  },
  {
    method: 'post',
    handler: async (req, res) => {
      const { serverId, type } = req.body;
      const result = await createInstance(
        { serverId, type }, Chat,
      );
      const response = JSON.stringify(result);
      res.end(response);
    },
  },
];
