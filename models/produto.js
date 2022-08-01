module.exports = (sequelize, DataTypes) => {
  const produto = sequelize.define('produtos', {
    nome: DataTypes.STRING,
    valor: DataTypes.INTEGER,
    quantidade: DataTypes.INTEGER,
    ml: DataTypes.INTEGER,
    tipo: DataTypes.STRING
  }, { timestamps: false });

  produto.associate = (models) => {
    produto.hasMany(models.saidas,
      { foreignKey: 'id', as: 'saida' });
  };

  return produto;
};