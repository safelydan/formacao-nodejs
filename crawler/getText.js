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
  const desc = $(".separator")
    .text()
    .replace(/\n/g, "")
    .split(".")
    .slice(0, 5)
    .join(".");
  const faixas = $(".separator").text().split(":")[1];
  const listaDeFaixas = faixas
    .trim()
    .split(/\d+\./)
    .filter(Boolean)
    .map((faixa) => faixa.trim());

    let imgSrc = '';
    $('a img').each((i, el) => {
      const src = $(el).attr('src');
      console.log(`Found image src: ${src}`); // Log de depuração

      if (src && src.includes('i.imgur.com')) {
        imgSrc = src;
        return false;  // Para de iterar quando encontrar o link do Imgur
      }
      if (src && src.includes('live.staticflickr.com')) {
        imgSrc = src;
        return false;  // Para de iterar quando encontrar o link do Flickr
      }
    });

  const obj = {
    titulo,
    desc,
    listaDeFaixas,
    imgSrc,
  };

  console.log(obj);
  return res.status(200).send(obj);
}

module.exports = {
  getInfo,
};
