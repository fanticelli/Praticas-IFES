const express = require("express");
const app = express();

//codificação json e url.
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const database = require("./db/db");
const Funcionario = require("./model/funcionario");
const funcionarioConroller = require("./controller/funcionarioController");

//sinc com banco de dados.
try {
  database.sync().then(() => {});
} catch (erro) {
  console.log("Houve uma falha ao sincronizar.", erro);
}

//rota - home.
app.get("/", (req, res) => {
  return res.json({ message: "Bem-vindo a nossa API!" });
});

//rota - cadastrar.
app.post("/Cadastrar", funcionarioConroller.FuncionarioCreate);

//rota - listar (com ou sem parametro).
app.get("/Funcionarios/:id?", funcionarioConroller.FuncionarioListar);

//rota - atualizar.
app.put("/Funcionarios/:id", funcionarioConroller.FuncionarioUpdate);

//rota - deletar.
app.delete("/Funcionarios/:id", funcionarioConroller.FuncionarioDelete);

//servidor.
app.listen(3000, () => {
  console.log("Servior rodando..");
});
