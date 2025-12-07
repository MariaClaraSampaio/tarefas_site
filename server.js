const express = require("express");
const session = require("express-session");
const path = require("path");
const { sequelize, Usuario, Tarefa, Aniversario } = require("./db");

const app = express();
const PORT = 3000;

// ------------------ MIDDLEWARES ------------------
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(session({
  secret: "segredo",
  resave: false,
  saveUninitialized: false
}));
app.use(express.static(path.join(__dirname, "public")));

// ------------------ ROTAS ------------------

// Página inicial -> login.html
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "login.html"));
});

// ------------------ USUÁRIOS ------------------

// Cadastro
app.post("/cadastro", async (req, res) => {
  try {
    const { nome, email, senha } = req.body;
    const usuario = await Usuario.create({ nome, email, senha });
    res.json(usuario);
  } catch (err) {
    res.status(500).json({ error: "Erro no cadastro" });
  }
});

// Login
app.post("/login", async (req, res) => {
  try {
    const { email, senha } = req.body;
    const usuario = await Usuario.findOne({ where: { email, senha } });
    if (!usuario) {
      return res.status(401).json({ error: "Credenciais inválidas" });
    }
    req.session.usuarioId = usuario.id;
    res.json({ message: "Login realizado" });
  } catch (err) {
    res.status(500).json({ error: "Erro no login" });
  }
});

// Logout
app.post("/logout", (req, res) => {
  req.session.destroy();
  res.json({ message: "Logout realizado" });
});

// ------------------ TAREFAS ------------------

// Criar tarefa
app.post("/tarefas", async (req, res) => {
  try {
    const usuarioId = req.session.usuarioId;
    const tarefa = await Tarefa.create({ ...req.body, UsuarioId: usuarioId });
    res.json(tarefa);
  } catch (err) {
    res.status(500).json({ error: "Erro ao criar tarefa" });
  }
});

// Listar tarefas
app.get("/tarefas", async (req, res) => {
  try {
    const usuarioId = req.session.usuarioId;
    const tarefas = await Tarefa.findAll({ where: { UsuarioId: usuarioId } });
    res.json(tarefas);
  } catch (err) {
    res.status(500).json({ error: "Erro ao listar tarefas" });
  }
});

// Atualizar tarefa
app.put("/tarefas/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const tarefa = await Tarefa.findByPk(id);
    if (!tarefa) return res.status(404).json({ error: "Tarefa não encontrada" });
    await tarefa.update(req.body);
    res.json({ message: "Tarefa atualizada com sucesso!" });
  } catch (err) {
    res.status(500).json({ error: "Erro ao atualizar tarefa" });
  }
});

// Apagar tarefa
app.delete("/tarefas/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const tarefa = await Tarefa.findByPk(id);
    if (!tarefa) return res.status(404).json({ error: "Tarefa não encontrada" });
    await tarefa.destroy();
    res.json({ message: "Tarefa apagada com sucesso!" });
  } catch (err) {
    res.status(500).json({ error: "Erro ao apagar tarefa" });
  }
});

// ------------------ ANIVERSÁRIOS ------------------

// Criar aniversário
app.post("/aniversarios", async (req, res) => {
  try {
    const usuarioId = req.session.usuarioId;
    const aniversario = await Aniversario.create({ ...req.body, UsuarioId: usuarioId });
    res.json(aniversario);
  } catch (err) {
    res.status(500).json({ error: "Erro ao criar aniversário" });
  }
});

// Listar aniversários
app.get("/aniversarios", async (req, res) => {
  try {
    const usuarioId = req.session.usuarioId;
    const aniversarios = await Aniversario.findAll({ where: { UsuarioId: usuarioId } });
    res.json(aniversarios);
  } catch (err) {
    res.status(500).json({ error: "Erro ao listar aniversários" });
  }
});

// Atualizar aniversário
app.put("/aniversarios/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const aniversario = await Aniversario.findByPk(id);
    if (!aniversario) return res.status(404).json({ error: "Aniversário não encontrado" });
    await aniversario.update(req.body);
    res.json({ message: "Aniversário atualizado com sucesso!" });
  } catch (err) {
    res.status(500).json({ error: "Erro ao atualizar aniversário" });
  }
});

// Apagar aniversário
app.delete("/aniversarios/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const aniversario = await Aniversario.findByPk(id);
    if (!aniversario) return res.status(404).json({ error: "Aniversário não encontrado" });
    await aniversario.destroy();
    res.json({ message: "Aniversário apagado com sucesso!" });
  } catch (err) {
    res.status(500).json({ error: "Erro ao apagar aniversário" });
  }
});

// ------------------ INICIALIZAÇÃO ------------------

sequelize.sync().then(() => {
  console.log("Banco sincronizado!");
  app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
});
