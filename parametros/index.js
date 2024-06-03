const express = require("express");

const app = express();

const router = express.Router();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/", (req, res) => {
  return res.send("ok");
});

app.use("/users", (req, res) => {});

const porta = 3456;

app.listen(porta, () => {
  console.log("porta abrida: ", porta);
});
