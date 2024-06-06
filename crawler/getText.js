const fetch = require("node-fetch");
const cheerio = require("cheerio");

async function getInfo(req, res) {
  const { url } = req.body;

  const response = await fetch(url);

  const data = await response.text();
  const $ = cheerio.load(data);
  const titulo =
    $(".post-title-container").text().replace(/\n/g, "").split(")")[0] + ")";
    const desc = $(".separator")
    .text()
    .replace(/\n/g, "")
    .split(".")
    .slice(0, 5)
    .join(".")
    .replace(/Faixas do álbum:01/, "")
    .trim();
    const listaDeFaixas = $(".separator")
    .map(function () {
        const texto = $(this).find("span").text().trim();
        if (/^\d+\.\s/.test(texto)) { // verifica se começa com número seguido de ponto e espaço
            return texto;
        } else {
            return null; // retorna null para filtrar os elementos que não são faixas
        }
    })
    .get();

  console.log(listaDeFaixas);

  let imgSrc = "";
  $("a img").each((i, el) => {
    const src = $(el).attr("src");
    if (src && src.includes("i.imgur.com")) {
      imgSrc = src;
      return false;
    }
    if (src && src.includes("live.staticflickr.com")) {
      imgSrc = src;
      return false;
    }
  });

  const obj = {
    titulo,
    desc,
    listaDeFaixas,
    imgSrc,
  };

  return res.status(200).send(obj);
}

module.exports = {
  getInfo,
};
