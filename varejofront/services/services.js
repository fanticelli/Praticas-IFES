const axios = require("axios");

module.exports = class Services {
  static async UsuarioLogin(req, res) {
    let valores = req.body;
    const options = {
      url: "https://f34d5493-9525-4910-a809-6255dd75b491-00-21a2hp0u0bgml.worf.replit.dev/login",
      method: "POST",
      data: valores,
    };
    axios(options).then((usuario) => {
      if (usuario != undefined) {
        return res.render("logado");
      }
    });
  }

  //Create usuário
  static async UsuarioCreate(req, res) {
    let valores = req.body;
    const options = {
      url: "https://f34d5493-9525-4910-a809-6255dd75b491-00-21a2hp0u0bgml.worf.replit.dev/add_usuario",
      method: "POST",
      data: valores,
    };
    axios(options);
    const mensagem = "Cadastro realizado com sucesso!";
    res.render("mensagem", { mensagem });
  }

  //Create produto
  static async ProdutoCreate(req, res) {
    let valores = req.body;
    const options = {
      url: "https://apivarejo.antonioizo.repl.co/add_produtos",
      method: "POST",
      data: valores,
    };
    axios(options);
    const mensagem = "Cadastro realizado com sucesso!";
    res.render("mensagem", { mensagem });
  }

  //LISTAR
  static async ProdutoListar(req, res) {
    const options = {
      url: "https://apivarejo.antonioizo.repl.co/produtos",
      method: "GET",
      data: {},
    };
    axios(options).then((response) => {
      console.log(response.data);
      const produto = response.data;
      res.render("produtos/listar", { produto });
    });
  }
};
