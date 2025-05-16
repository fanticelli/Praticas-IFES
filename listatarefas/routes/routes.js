const express = require("express");
const router = express.Router();

const usuarioController = require("../controller/usuarioController");
const tarefaController = require("../controller/tarefaController");

router.get("/", (req, res) => {
  return res.json({ message: "Sistema de Lista de Tarefas" });
});

//cadastrar - usuario
router.post("/usuarios/Cadastrar", usuarioController.UsuarioCreate);

//listar - usuario
router.get("/usuarios/:id?", usuarioController.verificaJWT,usuarioController.UsuarioListar);

//update - usuario
router.put("/usuarios/:id", usuarioController.UsuarioUpdate);

//delete - usuario
router.delete("/usuarios/:id", usuarioController.UsuarioDelete);

//login - usuario
router.post("/login", usuarioController.UsuarioVerificaLogin);

//cadastrar - tarefas
router.post("/tarefas/Cadastrar", tarefaController.TarefaCreate);

//listar - tarefas
router.get("/tarefas/:id?", tarefaController.TarefaListar);

//update - tarefas
router.put("/tarefas/:id", tarefaController.TarefaUpdate);

//delete - tarefas
router.delete("/tarefas/:id", tarefaController.TarefaDelete);

module.exports = router;
