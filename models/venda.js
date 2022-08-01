module.exports = (sequelize, DataTypes) => {
  const venda = sequelize.define('venda', {
    id_cliente: DataTypes.INTEGER,
    data_compra: DataTypes.DATE
  }, { timestamps: false });

  venda.associate = (models) => {
    venda.belongsTo(models.cliente,
      { foreignKey: 'id_cliente', as: 'clientes' });
  };

  return venda;
};