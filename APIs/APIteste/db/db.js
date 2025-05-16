const Sequelize = require("sequelize");

//configuração do banco de dados.
const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "./mercado.sqlite",
});

//tratamento de erros e autenticação do db.
try {
  sequelize.authenticate();
  console.log("Banco de dados conectado com sucesso!");
} catch (erro) {
  console.log("Erro ao conectar ao banco de dados", erro);
}
module.exports = sequelize;
