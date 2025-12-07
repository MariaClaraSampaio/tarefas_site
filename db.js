// db.js
const { Sequelize } = require("sequelize");
const UsuarioModel = require("./models/Usuario");
const TarefaModel = require("./models/Tarefa");
const AniversarioModel = require("./models/Aniversario");

// Conexão com SQLite (não precisa instalar nem rodar MySQL)
const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "database.sqlite" // arquivo físico que guarda os dados
});

// Inicializa modelos
const Usuario = UsuarioModel(sequelize);
const Tarefa = TarefaModel(sequelize);
const Aniversario = AniversarioModel(sequelize);

// Relacionamentos
Usuario.hasMany(Tarefa);
Tarefa.belongsTo(Usuario);

Usuario.hasMany(Aniversario);
Aniversario.belongsTo(Usuario);

module.exports = { sequelize, Usuario, Tarefa, Aniversario };
