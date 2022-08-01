const { produtos } = require('../../models');

const create = async ({ nome, valor, quantidade, tipo, ml }) => {
  const query = await produtos.create({nome, valor, quantidade, tipo, ml});
  return query.dataValues.id || null;
};

module.exports = { create };
