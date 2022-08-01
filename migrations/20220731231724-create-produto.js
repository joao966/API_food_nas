module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('produtos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      nome: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      valor: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      quantidade: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      ml: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      tipo: {
        allowNull: false,
        type: Sequelize.STRING,
      },
    });
  },

  down: async (queryInterface, _Sequelize) => {
    return queryInterface.dropTable('produtos');
  },
};