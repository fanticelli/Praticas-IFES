const express = require("express");
const app = express();

var cookie = require('cookie-parser');
app.use(cookie());

let user3 = {
  nome: "Luzia",
  apelido: "Lulu",
  idade: "18",
  cidade: "Serra"
};

app.get('/', (req,res)=>{
  res.send("Seja bem vindo!");
});

app.get("/adicionarCookie",(req,res)=>{
  res.cookie("user3", user3);
  res.send("Dados adicionados com sucesso!");
});

app.get("/mostrarCookies",(req,res)=>{
  res.send(req.cookies);
});


app.get("/logout",(req,res)=>{
  res.clearCookie();
  res.send("Usuários desconectados com sucesso!");
});

app.listen(443);