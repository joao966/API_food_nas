module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('venda', {
      id_venda: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      id_cliente: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'cliente',
          key: 'id_cliente',
        },
      },
      data_compra: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },

  down: async (queryInterface, _Sequelize) => {
    return queryInterface.dropTable('venda');
  },
};