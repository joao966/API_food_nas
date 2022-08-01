const { create } = require('../model');

const validateCreate = async (body) => {
  const result = await create(body);
  return result;
};


module.exports = { validateCreate };
