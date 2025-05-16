const Sequelize = require("sequelize");
const database = require("../db/db");

const Funcionario = database.define(
  "funcionario",
  {
    matricula: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },

    nome: {
      type: Sequelize.STRING,
      allowNull: false,
    },

    telefone: {
      type: Sequelize.STRING,
      allowNull: false,
    },

    email: {
      type: Sequelize.STRING,
    },

    nascimento: {
      type: Sequelize.DATE,
      allowNull: false,
    },
  },
  { database, modelName: "funcionario", tableName: "funcionarios" },
);
module.exports = Funcionario;
