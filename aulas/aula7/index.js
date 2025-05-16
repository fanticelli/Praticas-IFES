const express = require('express');
const app = express();

app.get("/contato", function(req, res){
  res.send('Contato')
})

app.get("/sobre", function(req, res){
  res.send('Sobre')
})

app.get('/', function(req, res){
  res.sendFile(__dirname + '/arquivo.html')
})

app.listen(443, () =>{
  console.log('Servidor rodando..')
})