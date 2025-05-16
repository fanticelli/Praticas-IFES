const express = require("express");
const router = express.Router();

const funcionarioController = require("../controller/funcionarioController");
const livroController = require("../controller/livroController");

router.get("/", (req, res) => {
  return res.json({ message: "Sistema de Livraria" });
});

//requisições funcionarios.
router.post("/add_funcionario", funcionarioController.funcionarioCreate);

router.get(
  "/funcionarios/:id?",
  funcionarioController.verificaJWT,
  funcionarioController.FuncionarioListar,
);

router.put("/funcionarios/:id", funcionarioController.FuncionarioUpdate);

router.delete("/funcionarios/:id", funcionarioController.FuncionarioDelete);

router.post("/login", funcionarioController.FuncionarioVerificaLogin);

//requisições livros.
router.post("/add_livros", livroController.livroCreate);

router.get("/livros/:id?", livroController.LivroListar);

module.exports = router;
