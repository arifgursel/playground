'use strict'
// Old Way
/*
function getStocksOver(stocks, price) {
  var results = [];

  stocks.forEach(function(stock) {
    if (stock.price >= minPrice) {
      results.push(stock);
    }
  });

  return results;
}
*/

//Filter Method
function getStocksOver(stocks, minPrice) {
  return stocks.filter(function(stock) {
    return stock.price >= minPrice;
  });
}

var expensiveStocks = getStocksOver(
  [
    { symbol: "DFG", price: 302.29, volume: 233443 },
    { symbol: "ERD", price: 205.09, volume: 56443 },
    { symbol: "WTY", price: 100.00, volume: 943443 },
  ],
  125.00);

console.log(JSON.stringify(expensiveStocks));
