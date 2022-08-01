module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('saida', {
      id_saida: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      id_produto: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'produto',
          key: 'id_produto',
        },
      },
      id_venda: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'venda',
          key: 'id_venda',
        },
      },
      quantidade: {
        allowNull: false,
        type: Sequelize.STRING,
      },
    });
  },

  down: async (queryInterface, _Sequelize) => {
    return queryInterface.dropTable('saida');
  },
};