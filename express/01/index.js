const express = require("express");

const app = express(); //carrega todo o frame do express, após isso dentro da variavel app temos todas sas funçoes do express

const port = 1111;

app.listen(port, (erro) => {
  if (erro) {
    console.log(erro);
  }
  console.log("servidor rodando na porta", port);
});

app.get('/ok', (req, res) => {
    res.status(200).send({msg: 'ok'})
})

app.get('/ola/:nome', (req, res) => {
    const { nome } = req.params;
    res.status(200).send({msg: `ola ${nome}`})
})
