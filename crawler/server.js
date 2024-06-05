const express = require("express");
const { getInfo } = require("./getText");
const {getPosts } = require("./getPosts");

const app = express();
app.use(express.json());

const port = 3000;

app.get("/language/descricao", getInfo);
app.get("/posts", getPosts);

app.listen(port, () => {
  console.log("Servidor rodando na porta", port);
});

module.exports = app;
