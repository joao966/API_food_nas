module.exports = {
  up: async (queryInterface, _Sequelize) => {
    return queryInterface.bulkInsert('Cliente',
      [
        {
          nome: 'Marcos',
          cpf: "13241236",
          telefone: "99 99999-9999",
        },
        {
          nome: 'Fred',
          cpf: "13244578",
          telefone: "99 99999-9999",
        },
        {
          nome: 'Lucas',
          cpf: "13245784",
          telefone: "99 99999-9999",
        },
        {
          nome: 'Matheus',
          cpf: "13256492",
          telefone: "99 99999-9999",
        },
      ],
      {},
    );
  },

  down: async (queryInterface, _Sequelize) => {
    return queryInterface.bulkDelete('Cliente', null, {});
  },
};