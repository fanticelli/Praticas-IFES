const http = require('http')
const porta = 443

//criação de um servidor.
const servidor = http.createServer((req,res) => {
  res.writeHead(200, {'Content-Type':'text/plain'})
  res.write('Primeiro servidor')
  res.end()
})

servidor.listen(porta, () => {
  console.log('Servidor rodando')
})