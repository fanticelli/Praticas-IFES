const Livro = require("../model/livroModel");

module.exports = class livroController {
  //cadastrar livros.
  static async livroCreate(req, res) {
    let titulo = req.body.titulo;
    let autor = req.body.autor;
    let preco = req.body.preco;
    let link = req.body.link;
    const livro = {
      titulo: titulo,
      autor: autor,
      preco: preco,
      link: link,
    };
    await Livro.create(livro);
    res.json({ message: "Livro cadastrado com sucesso!" });
  }

  //listar livros.
  static async LivroListar(req, res) {
    const id_livro = req.params.id;
    if (id_livro) {
      const livro = await Livro.findOne({ where: { id_livro: id_livro } });
      res.json(livro);
    } else {
      const livro = await Livro.findAll({ raw: true });
      res.json(livro);
    }
  }

  //atualizar livros.
  static async LivroUpdate(req, res) {
    const id_livro = req.params.id;
    let titulo = req.body.titulo;
    let autor = req.body.autor;
    let preco = req.body.preco;
    let link = req.body.link;
    const livro = {
      titulo: titulo,
      autor: autor,
      preco: preco,
      link: link,
    };
    await Livro.update(livro, { where: { id_livro: id_livro } });
    res.json({
      message:
        "Cadastro atualizado com sucesso! Foram atualizados as sequintes informações: ",
      dados: livro,
    });
  }

  //deletar livros.
  static async LivroDelete(req, res) {
    const id_livro = req.params.id;
    await Livro.destroy({ where: { id_livro: id_livro } });

    res.json({ message: "Livro excluído com sucesso!" });
  }
};
