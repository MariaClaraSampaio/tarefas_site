const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const Tarefa = sequelize.define("Tarefa", {
    titulo: {
      type: DataTypes.STRING,
      allowNull: false
    },
    descricao: {
      type: DataTypes.STRING,
      allowNull: true
    },
    categoria: {
      type: DataTypes.STRING,
      allowNull: true
    },
    prazo: {
      type: DataTypes.DATE,
      allowNull: true
    },
    hora: {
      type: DataTypes.STRING,
      allowNull: true
    },
    urgencia: {
      type: DataTypes.STRING,
      allowNull: true
    },
    concluida: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  });
  return Tarefa;
};
