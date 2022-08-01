module.exports = (sequelize, DataTypes) => {
  const venda = sequelize.define('vendas', {
    id_cliente: DataTypes.INTEGER,
    data_compra: DataTypes.DATE
  }, { timestamps: false });

  venda.associate = (models) => {
    venda.belongsTo(models.clientes,
      { foreignKey: 'id', as: 'clientes' });
  };

  return venda;
};