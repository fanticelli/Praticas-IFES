//import de bibliotecas e arq.
const database = require('./db');
const Cliente = require('./models/cliente');

//servidor.
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

//setando os valores.
app.set('view engine', 'html');
app.engine('html', require('ejs').renderFile);

app.use(bodyParser.json());
app.use(express.urlencoded({
  extended: true
}));

//rotas.
app.get('/', (req, res)=>{
  res.send('Bem vindo ao cadastro de clientes.');
});

app.get("/cadcliente", function(req, res){
  res.render('formCliente');
})

app.post("/addcliente", function(req, res){
  Cliente.create({
    nome: req.body.nome,
    nascimento: req.body.nascimento,
    cidade: req.body.cidade,
    telefone: req.body.telefone
  }).then(function(){
    res.send("Cliente cadastrado com sucesso!");
  })
})

app.listen(9443, ()=>{
  console.log('Servidor rodando..');
});

//sincronizando.
(async()=>{
  
  try{
    const resultado = await database.sync();
    console.log(resultado);

    const clientes = await Cliente.findAll();
    console.log("Lista de Clientes \n", clientes);
    
  }catch(error){
    console.log(error);
  } 
})();