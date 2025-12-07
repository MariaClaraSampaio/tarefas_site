const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const Aniversario = sequelize.define("Aniversario", {
    nome: {
      type: DataTypes.STRING,
      allowNull: false
    },
    data: {
      type: DataTypes.DATE,
      allowNull: false
    }
  });
  return Aniversario;
};
