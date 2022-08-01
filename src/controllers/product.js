const { produtos } = require('../../models');

const getAll = async (_req, res, _next) => {

  const result = await produtos.findAll();
  console.log('result: ', result);

  return res.status(200).json({ message: "success", result});
};

const getById = async (_req, res, _next) => {

  return res.status(200).json({ message: 'success' });
};

const create = async (_req, res, _next) => {
 
  return res.status(201).json({ message: 'success' });
};

const update = async (_req, res, _next) => {
  
  return res.status(200).json({ message: 'success' });
};

const exclude = async (_req, res, _next) => {
 
  return res.status(200).json({ message: 'success' });
};

module.exports = {
  getAll,
  getById,
  create,
  update,
  exclude,
};
