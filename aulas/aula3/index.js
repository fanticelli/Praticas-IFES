const http = require('http')
const fs = require('fs')

const porta = 443

//criação do servidor.
const server = http.createServer((req, res) => {
  fs.readFile('main.html', (erro, arquivo) => {

    //cabecalho.
    res.writeHead(200, {'Content-type': 'text/html'})
    res.write(arquivo)
    res.end()
  })
})

server.listen(porta, () => {
  console.log('Servidor rodando')
})