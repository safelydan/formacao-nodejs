const fetch = require("node-fetch");
const cheerio = require("cheerio");

async function getPosts(req, res) {
  const { url } = req.body;

  const response = await fetch(url);
  const data = await response.text();
  const $ = cheerio.load(data);

  const posts = $(".post-title.entry-title").text().replace(/\n/g, "");
  const regex = /([A-Za-z\s]+ - [A-Za-z\s]+ \(\d{4}\))/g;
  const resultados = posts.split(regex).map(title => title.trim()).filter(title => title.length > 0);
  const imgs = $(".img").attr("src");
  
  const infos = {
    resultados,
    imgs,
  };

  console.log(infos);
  return res.status(200).send(infos);
}

module.exports = {
  getPosts,
};
