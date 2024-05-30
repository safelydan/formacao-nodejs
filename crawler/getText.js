const fetch = require("node-fetch");
const cheerio = require("cheerio");

async function getInfo(req, res) {
  const { urls } = req.body;
  console.log(urls);

  const response = await fetch(urls);

  const data = await response.text();
  const $ = cheerio.load(data);
  const titulo =
    $(".post-title-container").text().replace(/\n/g, "").split(")")[0] + ")";
  const desc = $("span")
    .text()
    .replace(/\n/g, "")
    .split(".")
    .slice(1, 2)
    .join(".");
  const faixas = $(".separator").text().split(":")[1];
  const listaDeFaixas = faixas
    .trim()
    .split(/\d+\./)
    .filter(Boolean)
    .map((faixa) => faixa.trim());

  const img = $(".photo").attr(".href");

  const obj = {
    titulo,
    desc,
    listaDeFaixas,
    img,
  };

  console.log(obj);
  return res.status(200).send(obj);
}

module.exports = {
  getInfo,
};
