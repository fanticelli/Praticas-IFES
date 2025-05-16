const express = require("express");
const app = express();
var route = require("./routes/route");

//handlebars.
const hand = require("express-handlebars");
app.set('view engine', 'html');
app.engine("handlebars", hand.engine());
app.set("view engine","handlebars");

//route.
app.use(express.urlencoded({exended: true}));
app.use("/", route);

//servidor.
app.listen(443, ()=>{
  console.log("Servior rodando..");
});