const database = require("./db/db");
const express = require("express");
const app = express();
const Video = require("./models/Video");
const VideoRoutes = require("./routes/routesVideo");

const VideoControllers = require("./controllers/ControllerVideo");
const hand = require("express-handlebars");

app.engine("handlebars", hand.engine());
app.set("view engine", "handlebars");
app.use(express.urlencoded({extended: true}));

app.use(express.json());
app.use(express.static("public"));

app.use("/", VideoRoutes);

try{
  database.sync().then(()=>{

    //servidor.
    app.listen(9443, ()=>{
      console.log('Servidor rodando..');
    })
  })
}catch(erro){
  console.log("Houve uma falha ao sincronizar o banco de dados. ", erro);
};


