const Mock = require("mockjs");
const Random = Mock.Random; //获取random对象，随机生成各种数据
const domain = "http://mockjs.com/api";

// Random.time()默认就是HH:mm:ss
// Random.now('HH:mm:ss')

// 发现如果写成@time，时间会变，如果写成Random.time(),会重复成四个一样的
Mock.mock(`${domain}/k`, "get", {
  "btcusdt|4": [
    {
      time: "@time",
      amount: "@float(60707.45192285645,72707.45192285645，11,11)",
      close: "@float(7232,7400,2,4)",
      high: "@float(6923,7452,2,4)",
      "id|+1": 137240824,
      low: "@float(6742,7144,2,4)",
      open: "@float(7152,7242,2,4)",
      vol: 443041963.533270312
    }
  ]
});

Mock.mock(`${domain}/test/USDT`, "get", {
  USDT: [
    {
      "value|+1": ["USDT", "HUSD", "BTC", "ETH", "HT", "ATLS"],
      "id|+1": 0,
      amount: 13211,
      close: 11412,
      high: 1312,
      open: 132141
    }
  ]
});
Mock.mock(`${domain}/coin/detail/USDT`, "get", {
  "data|20": [
    {
      "value|+1": ["BTC", "ETH", "HT", "XRP", "LTC", "BCH"],
      "id|+1": 0,
      close: "@float(6210,7390,2,2)",
      rise: "@float(0,5,2,2)"
    }
  ]
});

Mock.mock(`${domain}/market`, "get", {
  "usdt|20": [
    {
      "value|+1": ["btc", "eth", "zhc"],
      amount: "￥7,335,620,861",
      ask: [7404.91, 0.023899],
      bid: [7402.61, 0.05494],
      close: 7404.9,
      count: 565897,
      high: 7453.76,
      "id|+1": 211917657918,
      low: 7036.09,
      open: 7076.04,
      version: 211917657918,
      vol: 532934264.4613614,
      info: "@cparagraph(4,9)"
    }
  ]
});
