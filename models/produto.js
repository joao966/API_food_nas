module.exports = (sequelize, DataTypes) => {
  const produto = sequelize.define('produto', {
    nome: DataTypes.STRING,
    valor: DataTypes.INTEGER,
    quantidade: DataTypes.INTEGER,
    ml: DataTypes.INTEGER,
    tipo: DataTypes.STRING
  }, { timestamps: false });

  produto.associate = (models) => {
    produto.hasMany(models.saida,
      { foreignKey: 'id_saida', as: 'saidas' });
  };

  return produto;
};