const sequelize = require("./db");

async function testarConexao() {
  try {
    await sequelize.authenticate();
    console.log("✅ Conexão estabelecida com sucesso!");
  } catch (error) {
    console.error("❌ Erro ao conectar:", error);
  } finally {
    await sequelize.close();
  }
}

testarConexao();
