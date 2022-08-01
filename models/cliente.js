module.exports = (sequelize, DataTypes) => {
  const cliente = sequelize.define('clientes', {
    nome: DataTypes.STRING,
    cpf: DataTypes.INTEGER,
    telefone: DataTypes.STRING
  }, { timestamps: false });

  cliente.associate = (models) => {
    cliente.hasMany(models.vendas,
      { foreignKey: 'id', as: 'vendas' });
  };
  
  return cliente;
};