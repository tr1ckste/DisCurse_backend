'use strict';

const Test = require('../../models/test.schema');

module.exports = [
  {
    method: 'get',
    handler: async (req, res) => {
      const { name } = req.query;
      const test = await Test.find({ name });
      const response = JSON.stringify(test);
      res.json(response);
    },
  },
  {
    method: 'post',
    handler: async (req, res) => {
      const { name } = req.body;
      const test = new Test({ name });
      const result = await test.save(err => err);
      res.end(result);
    },
  },
];
