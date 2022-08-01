module.exports = {
  up: async (queryInterface, _Sequelize) => {
    return queryInterface.bulkInsert('Produto',
      [
        {
          nome: 'Coca-Cola',
          valor: 5,
          quantidade: 10,
          ml: 390,
          tipo: "Não-Alcólico",
        },
        {
          nome: 'Skol Lata',
          valor: 8,
          quantidade: 20,
          ml: 390,
          tipo: "Alcólico",
        },
        {
          nome: 'Brahma Garrafa',
          valor: 12,
          quantidade: 30,
          ml: 600,
          tipo: "Alcólico",
        },
        {
          nome: 'Heineken Garaffa',
          valor: 15,
          quantidade: 50,
          ml: 650,
          tipo: "Alcólico",
        },
      ],
      {},
    );
  },

  down: async (queryInterface, _Sequelize) => {
    return queryInterface.bulkDelete('Produto', null, {});
  },
};