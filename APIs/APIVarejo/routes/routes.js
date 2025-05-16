const express = require("express");
const router = express.Router();

const usuarioController = require("../controller/usuarioController");

router.get("/",(req, res) =>{
 return res.json({message: "Sistema de Varejo"});
})

router.post("/usuarios/Cadastrar", usuarioController.UsuarioCreate);

router.get("/usuarios/:id?",usuarioController.verificaJWT, usuarioController.UsuarioListar);

router.put("/usuarios/:id", usuarioController.UsuarioUpdate);

router.delete("/usuarios/:id", usuarioController.UsuarioDelete);

router.post("/login", usuarioController.UsuarioVerificaLogin);

router.post("/add_produtos", produtoController.produtoCreate);

router.get("/produtos/:id?", produtoController.ProdutoListar);

module.exports = router;