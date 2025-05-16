const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Bem-vindo ao Servidor Web utilizado Express!')
})

app.listen(443, () => {
  console.log('Servidor rodando..')
})