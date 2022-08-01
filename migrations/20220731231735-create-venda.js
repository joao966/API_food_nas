module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('vendas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      id_cliente: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'clientes',
          key: 'id',
        },
      },
      data_compra: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },

  down: async (queryInterface, _Sequelize) => {
    return queryInterface.dropTable('vendas');
  },
};