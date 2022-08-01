module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('saidas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      id_produto: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'produtos',
          key: 'id',
        },
      },
      id_venda: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'vendas',
          key: 'id',
        },
      },
      quantidade: {
        allowNull: false,
        type: Sequelize.STRING,
      },
    });
  },

  down: async (queryInterface, _Sequelize) => {
    return queryInterface.dropTable('saidas');
  },
};