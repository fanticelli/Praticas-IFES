const http = require("http");

const servidor = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });

  if (req.url == "/") {
    res.write("<h1>Seja bem-vindo!</h1>");
  } else if (req.url == "/server") {
    res.write("<h1>Server</h1>");
  } else if (req.url == "/server/node") {
    res.write("<h1>Server no Node</h1>");
  } else {
    res.write("<h1>PADRAO </h1>");
  }
  res.end()
});

servidor.listen(443, () => {
  console.log("servidor rodando...");
});
