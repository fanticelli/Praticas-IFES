const express = require("express");
const app = express();
const nodemailer = require("nodemailer");

app.get("/", (req, res) => {
  res.send("Enviando e-mail com o Nodemailer!");
});

//destino.
app.get("./sendemail", async (req, res) => {
  var transport = nodemailer.createTransport({
    host: "sandbox.smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "ba979b0aa49402",
      pass: "2208434097138a",
    },
  });

  //mensagem.
  var message = {
    from: "sender@server.com",
    to: "receiver@sender.com",
    subject: "Message title",
    text: "Plaintext version of the message",
    html: "<p>HTML version of the message</p>",
  };

  //tratamento de erros.
  transport.sendMail(message, function (err) {
    if (err)
      return res.status(400).json({
        erro: true,
        mensagm: "Erro: e-mail não enviado",
      });
    else
      return res.json({
        erro: false,
        mensagem: "E-mail enviado com sucesso!",
      });
  });
});

//servidor.
app.listen(443, () => {
  console.log("Servidor rodando..");
});
