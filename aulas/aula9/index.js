const http = require('http')
const url = require('url')

const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-type': 'text/html'})
  res.write(req.url)

  const paramentro = url.parse(req.url,true).query
  res.write('<br/>'+paramentro.nome)
  res.write('<br/>'+paramentro.sobrenome)
  res.write('<br/>'+paramentro.cidade)
  res.end()
})

server.listen(443, () => {
  console.log('Servidor rodando..')
})