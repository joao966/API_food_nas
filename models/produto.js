module.exports = (sequelize, DataTypes) => {
  const Produto = sequelize.define('Produto', {
    nome: DataTypes.STRING,
    valor: DataTypes.INTEGER,
    quantidade: DataTypes.INTEGER,
    ml: DataTypes.INTEGER,
    tipo: DataTypes.STRING
  }, { timestamps: false });

  Produto.associate = (models) => {
    Produto.hasMany(models.Saida,
      { foreignKey: 'id_saida', as: 'saidas' });
  };

  return Produto;
};