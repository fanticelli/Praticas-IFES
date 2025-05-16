const express = require("express");

//criação de rota
const rotas = express.Router();

//banco de dados
const municipios = [
  { cidade: "vitoria", info: "Vitória: Capital do ES" },
  { cidade: "vilavelha", info: "Vila Velha: Canea Verde" },
  { cidade: "cachoeiro", info: "Cachoeiro de Itapemirim: Princesa do Sul" },
  { cidade: "colatina", info: "Colatina: Princesa do Norte" },
];

//rotas
rotas.get("/", (req, res) => {
  res.json({ Olá: "Seja bem-vindo!" });
});

rotas.get("/:cidadeid", (req, res) => {
  const cidade = req.params.cidadeid;
  const cidadeinfo = municipios.find((i) => i.cidade == cidade);

  if (!cidadeinfo) {
    res
      .status(404)
      .json({ erro: "Cidade não encontrada!", cidadepesquisada: cidade });
  } else {
    res.status(200).json(cidadeinfo);
  }
});

//exportar pro index
module.exports = rotas;
