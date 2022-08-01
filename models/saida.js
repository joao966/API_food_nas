module.exports = (sequelize, DataTypes) => {
  const Saida = sequelize.define('Saida', {
    id_produto: DataTypes.INTEGER,
    id_cliente: DataTypes.INTEGER,
  }, { timestamps: false });

  Saida.associate = (models) => {
    models.Produto.belongsToMany(models.Produto, {
      as: 'produtos',
      through: Saida,
      foreignKey: 'id_produto',
      otherKey: 'id_cliente',
    });

    models.Cliente.belongsToMany(models.Cliente, {
      as: 'clientes',
      through: Saida,
      foreignKey: 'id_cliente',
      otherKey: 'id_produto',
    });
  };
  return Saida;
};