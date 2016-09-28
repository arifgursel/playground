'use strict'

var stocks = [
    { symbol: "DFG", price: 302.29, volume: 233443 },
    { symbol: "ERD", price: 205.09, volume: 56443 },
    { symbol: "WTY", price: 100.00, volume: 943443 },
];

var filteredStockSymbols =
  stocks.
  filter(fucntion(stock) {
    return stock.price >= 150.00;
  }).
  map(function(stock) {
    return stock.symbol;
  });

filteredStockSymbols.forEach(function(symbol) {
  console.log(symbol);
});
