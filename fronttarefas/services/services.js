const axios = require("axios");

module.exports = class Services {

  //CADASTRAR
  static async TarefaCreate(req, res) {
    let valores = req.body;
    const options = {
      url: "https://c41332c5-b9c1-483b-8b8b-23b15c8a2d76-00-27u4mjklqt65r.kirk.replit.dev/tarefas/Cadastrar",
      method: "POST",
      data: valores,
    };

    axios(options);
    const mensagem = "Cadastro realizado com sucesso!";
    res.render("mensagem", { mensagem });
  }

  //LISTAR
  static async TarefaListar(req,res){
    const options = {
      url: 'https://c41332c5-b9c1-483b-8b8b-23b15c8a2d76-00-27u4mjklqt65r.kirk.replit.dev/tarefas',
      method: 'GET',
      data: {}
    };
   
    axios(options).then(response => {
    console.log(response.data);
    const tarefa =response.data
    res.render("tarefas/listar",{tarefa});
    });
  }

  //UPDATE 
  static async TarefaUpdate(req,res){

   let valores = req.body;
   const options = {
   url: 'https://c41332c5-b9c1-483b-8b8b-23b15c8a2d76-00-27u4mjklqt65r.kirk.replit.dev/tarefas/'+valores.id_tarefa,
   method: 'PUT',
   data: valores
   };
   axios(options);
   const mensagem = "Registro atualizado com sucesso";
   res.render("mensagem",{mensagem});
   }

  //DELETE
   static async TarefaDelete(req,res){
   let id_tarefa = req.body.id_tarefa;
   const options = {
   url: 'https://c41332c5-b9c1-483b-8b8b-23b15c8a2d76-00-27u4mjklqt65r.kirk.replit.dev/tarefas/'+id_tarefa,
   method: 'DELETE'
   };
   axios(options);
   const mensagem = "Tarefa excluída com sucesso!";
   res.render("mensagem",{mensagem});
   }
}