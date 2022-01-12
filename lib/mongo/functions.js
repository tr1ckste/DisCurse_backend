'use strict';

const findByArgs = async (args, Model) => {
  const definedArgs = {};
  for (const [key, value] of Object.entries(args)) {
    if (value) definedArgs[key] = value;
  }
  if (!definedArgs.length) {
    const response = await Model.find();
    return response;
  }
  const response = await Model.find({ ...definedArgs });
  return response;
};

const createInstance = async (args, Model) => {
  console.log(args);
  const obj = { ...args };
  console.log(obj);
  const model = new Model({ ...args });
  const result = await model.save(err => err);
  return result;
};

module.exports = { findByArgs, createInstance };
