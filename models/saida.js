module.exports = (sequelize, DataTypes) => {
  const saida = sequelize.define('saida', {
    id_produto: DataTypes.INTEGER,
    id_cliente: DataTypes.INTEGER,
  }, { timestamps: false });

  saida.associate = (models) => {
    models.produto.belongsToMany(models.produto, {
      as: 'produtos',
      through: saida,
      foreignKey: 'id_produto',
      otherKey: 'id_cliente',
    });

    models.cliente.belongsToMany(models.cliente, {
      as: 'clientes',
      through: saida,
      foreignKey: 'id_cliente',
      otherKey: 'id_produto',
    });
  };
  return saida;
};