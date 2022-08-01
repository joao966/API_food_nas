module.exports = (sequelize, DataTypes) => {
  const Cliente = sequelize.define('Cliente', {
    nome: DataTypes.STRING,
    cpf: DataTypes.INTEGER,
    telefone: DataTypes.STRING
  }, { timestamps: false });

  Cliente.associate = (models) => {
    Cliente.hasMany(models.Venda,
      { foreignKey: 'id_venda', as: 'vendas' });
  };
  
  return Cliente;
};