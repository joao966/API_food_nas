module.exports = (sequelize, DataTypes) => {
  const saida = sequelize.define('saidas', {
    id_produto: DataTypes.INTEGER,
    id_cliente: DataTypes.INTEGER,
  }, { timestamps: false });

  saida.associate = (models) => {
    models.produtos.belongsToMany(models.produtos, {
      as: 'produtos',
      through: saida,
      foreignKey: 'id',
      otherKey: 'id',
    });

    models.clientes.belongsToMany(models.clientes, {
      as: 'clientes',
      through: saida,
      foreignKey: 'id',
      otherKey: 'id',
    });
  };
  return saida;
};