module.exports = {
  up: async (queryInterface, _Sequelize) => {
    return queryInterface.bulkInsert('Venda',
      [
        {
          id_cliente: 1,
          data_compra: '10/02/2022',
        },
        {
          id_cliente: 2,
          data_compra: '18/02/2022',
        },
        {
          id_cliente: 3,
          data_compra: '06/02/2022',
        },
        {
          id_cliente: 4,
          data_compra: '14/02/2022',
        },
      ],
      {},
    );
  },

  down: async (queryInterface, _Sequelize) => {
    return queryInterface.bulkDelete('Venda', null, {});
  },
};