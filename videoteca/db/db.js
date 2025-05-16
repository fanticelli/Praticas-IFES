const Sequelize = require('sequelize');

//config do db.
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './videoteca.sqlite'
})

//autenticação e erros.
try{
  sequelize.authenticate();
  console.log("Banco de dados conectado com sucesso!");
}catch(erro){
  console.log("Erro ao conectar ao banco de dados", erro);
}

module.exports = sequelize;