const fetch = require("node-fetch");
const cheerio = require("cheerio");

async function getPosts(req, res) {
  const { url } = req.body;

  const response = await fetch(url);
  const data = await response.text();
  const $ = cheerio.load(data);

  const posts = $(".post-title.entry-title").text().replace(/\n/g, '')
  const imgs = $(".img").attr('src').text()
  const titles = {
    posts,
    imgs
  };

  console.log(titles);
  return res.status(200).send(titles);
}

module.exports = {
  getPosts,
};
