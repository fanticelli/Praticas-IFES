const { raw } = require("express");
const Funcionario = require("../model/funcionario");

//exportando classe.
module.exports = class funcionarioController {
  //exportando classe para uso em outros arquivos.
  static async FuncionarioCreate(req, res) {
    //atribuindo var locais.
    let nome = req.body.nome;
    let endereco = req.body.endereco;
    let telefone = req.body.telefone;
    let email = req.body.email;
    let nascimento = req.body.nascimento;

    //atribuindo objeto.
    const funcionario = {
      nome: nome,
      endereco: endereco,
      telefone: telefone,
      email: email,
      nascimento: nascimento,
    };

    //criando novo registro.
    await Funcionario.create(funcionario);

    //enviando resposta.
    res.json({ message: "Cadastro realizado com sucesso!" });
  }

  //listagem.
  static async FuncionarioListar(req, res) {

    //listar 1 funcionario.
    const matricula = req.params.id;
    if(matricula){
      const funcionario = await Funcionario.findOne({where: {matricula: matricula}});
      res.json(funcionario);
    }else{
      
      //listar todos os funcionarios.
      const funcionario = await Funcionario.findAll({ raw: true });
      res.json(funcionario);
    }
  }

  //Atualização.
  static async FuncionarioUpdate(req,res){
    const matricula = req.params.id;

    //var locais.
    let nome = req.body.nome;
    let endereco = req.body.endereco;
    let telefone = req.body.telefone;
    let email = req.body.email;
    let nascimento = req.body.nascimento;

    //atribuindo objeto.
    const funcionario = {
      nome: nome,
      endereco: endereco,
      telefone: telefone,
      email: email,
      nascimento: nascimento,
    };
    
    //checando a matricula e atualizando.
    await Funcionario.update(funcionario,{where:{matricula:matricula}});

    //enviando resposta.
    res.json({message: "Cadastro atualizado com sucesso! \nForam atualizados os seguintes dados: ", dados: funcionario});
  }

  //Deletar.
  static async FuncionarioDelete(req,res){
    const matricula = req.params.id;

    //checando e deletando.
    await Funcionario.destroy({where:{matricula:matricula}});

    //enviando resposta.
    res.json({message: "Funcionario excluido com sucesso!"});
  }
};
