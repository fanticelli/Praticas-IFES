const http = require('http')
const fs = require('fs')
const porta = 443

const serve = http.createServer((req, res) => {
  fs.appendFile('file.txt', 'Frase criada pelo appendFile no txt', (erro) => {
    if(erro) throw erro
    console.log('Arquivo criado')
    res.end()
  })
})

serve.listen(porta, () => {
  console.log('Servidor rodando')
})