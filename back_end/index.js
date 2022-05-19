const express = require("express");
const dotenv = require('dotenv');
const path = require("path");

//const CoinGecko = require('coingecko-api');
const fetch = require('node-fetch');
const { send } = require("express/lib/response");
dotenv.config();

const PORT = process.env.PORT || 3001;

const app = express();

app.get('/CoinList/:monnaie/', async (req, res) => {
  const monnaie = req.params.monnaie;
  console.log("DANS COIN LIST : ")
  console.log(monnaie);
  const resultat = await 
  fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${monnaie}&order=market_cap_desc&per_page=100&page=1&sparkline=false`
  )
  const json_res = await resultat.json()
  res.json(json_res);
});

app.get("/SingleCoin/:id", async (req, res) => {
  const id = req.params.id;
  console.log("DANS SIGNLE COIN : ")
  console.log(id);
  const resultat = await 
  fetch(`https://api.coingecko.com/api/v3/coins/${id}`)
  const json_res = await resultat.json()
  res.json(json_res);
});

app.get("/HistoricalChart/:id/:currency/:days", async (req, res) => {
  const id = req.params.id;
  const currency = req.params.currency;
  const days = req.params.days;
  console.log("DANS HISTORICALCHART : ");
  console.log(id,currency,days);
  const resultat = await 
  fetch(`https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=${currency}&days=${days}`)
  const json_res = await resultat.json()
  res.json(json_res);
});

app.get("/TrendingCoins/:currency", async (req, res) => {
  const currency = req.params.currency;
  console.log("DANS Trading COINS : ")
  console.log(currency);
  const resultat = await 
  fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=gecko_desc&per_page=10&page=1&sparkline=false&price_change_percentage=24h`
  )
  const json_res = await resultat.json()
  res.json(json_res);
});

app.listen(PORT, () => {
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}..`);
});

app.get('/search2',async (req, res) => {
  //console.log("le REQ : ",req.body)
const resultat = await 
fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false')
const json_res = await resultat.json()
//console.log(json_res);
res.json(json_res);
})

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>> DEPLOY PART
__dirname = path.resolve();

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/mon-app/build")));

  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "mon-app", "build", "index.html"))
  );
} else {
  app.get("/", (req, res) => {
    res.send("API is running..");
  });
}

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>> DEPLOY PART