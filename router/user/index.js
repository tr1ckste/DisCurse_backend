'use strict';

const User = require('../../models/user.schema');
const { findByArgs, createInstance } = require('../../lib/mongo/functions');

module.exports = [
  {
    method: 'get',
    handler: async (req, res) => {
      const { name, outerId } = req.query;
      const users = await findByArgs({ name, outerId }, User);
      const response = JSON.stringify(users);
      res.end(response);
    },
  },
  {
    method: 'post',
    handler: async (req, res) => {
      const { login, password, outerId, servers } = req.body;
      const result = await createInstance(
        { login, password, outerId, servers }, User,
      );
      const response = JSON.stringify(result);
      res.end(response);
    },
  },
];
