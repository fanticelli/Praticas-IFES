const http = require("http");
const formidavel = require("formidable");
const fs = require("fs");

const server = http.createServer((req, res) => {
  if (req.url != "/enviodearquivo") {
    res.writeHead(200, { "Content-type": "text/html" });
    res.write(
      '<form action = "envioarquivo" method = "post" enctype = "multipart/form-data">',
    );
    res.write('<input type = "file" name = "fileupload"><br>');
    res.write('<input type = "submit" value = "Enviar">');
    res.write("</form>");
    return res.end();
  } else {
    const form = new formidavel.IncomingForm();
    form.parse(req, (erro, campos, arquivos) => {
      const urlAntiga = arquivos.filetoupload[0].filepath;
      const urlNova =
        "./envioarquivo/" + arquivos.filetoupload[0].originalFilename;

      var rawData = fs.readFileSync(urlAntiga);
      fs.writeFile(urlNova, rawData, function (err) {
        res.write("Arquivo enviado com sucesso!");
        res.end();
      });
    });
  }
});

server.listen(3000, () => {
  console.log("Servidor rodando..");
});
