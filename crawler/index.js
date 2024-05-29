const fetch = require("node-fetch");
const cheerio = require("cheerio");

async function getInfo(info) {
  const url = `${info}`;
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`Failed to fetch info: ${response.statusText}`);
  }

  const data = await response.text();
  const $ = cheerio.load(data);
  const name = $(".color_h1").text();
  const descricao = $("p.intro").first().text();

  const obj = {
    name,
    descricao,
  };
  console.log(obj);
  return data;
}

getInfo("https://www.w3schools.com/html/html_basic.asp");
