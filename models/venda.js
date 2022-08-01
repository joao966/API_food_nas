module.exports = (sequelize, DataTypes) => {
  const Venda = sequelize.define('Venda', {
    id_cliente: DataTypes.INTEGER,
    data_compra: DataTypes.DATE
  }, { timestamps: false });

  Venda.associate = (models) => {
    Venda.belongsTo(models.Cliente,
      { foreignKey: 'id_cliente', as: 'clientes' });
  };

  return Venda;
};