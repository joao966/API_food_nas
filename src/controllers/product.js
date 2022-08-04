const rescue = require('rescue');
const { produtos } = require('../../models');
const { validateCreate } = require('../services');

const getAll = async (_req, res, _next) => {

  const result = await produtos.findAll();
  console.log('result: ', result);

  return res.status(200).json({ message: "success", result});
};

const getById = async(req, res, _next) => {
  const { id } = req.params;
  const result = await produtos.findByPk(id);
  return res.status(200).json({ message: 'success', result });
};

const create = async (req, res, _next) => {
  const { nome, valor, quantidade, tipo, ml } = req.body;

  const response = await validateCreate({ nome, valor, quantidade, tipo, ml });

  const result = {
    id_inseted: response,
  }
 
  return res.status(201).json({ message: 'success', result });
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
