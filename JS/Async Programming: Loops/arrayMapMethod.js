'use strict'

/* Old Way: Without Map Method

function getStockSymbols(stocks) {
  var symbols = [];

  stocks.forEach(function(stock){
    symbols.push(stock.symbol);
  })

  return symbols;
}

*/

// Async Way w/ MAP Method
function getStockSymbols(stocks) {
  return stocks.map(function(stock) {
    return stock.symbol;
  })
}

var symbols = getStockSymbols([
  { symbol: "DFG", price: 293.39, volume: 78848},
  { symbol: "SDF", price: 100.34, volume: 166778},
  { symbol: "DFG", price: 90.76, volume: 2344},
]);

console.log(JSON.stringify(symbols));
