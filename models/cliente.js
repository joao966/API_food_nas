module.exports = (sequelize, DataTypes) => {
  const cliente = sequelize.define('cliente', {
    nome: DataTypes.STRING,
    cpf: DataTypes.INTEGER,
    telefone: DataTypes.STRING
  }, { timestamps: false });

  cliente.associate = (models) => {
    cliente.hasMany(models.venda,
      { foreignKey: 'id_venda', as: 'vendas' });
  };
  
  return cliente;
};