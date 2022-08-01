module.exports = {
  up: async (queryInterface, _Sequelize) => {
    return queryInterface.bulkInsert('Saida',
      [
        {
          id_venda: 1,
          id_produto: 1,
          quantidade: 1,
        },
        {
          id_venda: 2,
          id_produto: 2,
          quantidade: 5,
        },
        {
          id_venda: 3,
          id_produto: 3,
          quantidade: 10,
        },
        {
          id_venda: 4,
          id_produto: 4,
          quantidade: 5,
        },
      ],
      {},
    );
  },

  down: async (queryInterface, _Sequelize) => {
    return queryInterface.bulkDelete('Saida', null, {});
  },
};