
/* Old For Loop Way
function getStockSymbols(stocks) {
  var symbols = [],
    counter,
    stock;

  for(counter = 0; counter < stocks.length; counter++){
    stock = stocks[counter];
    symbols.push(stock.symbol);
  }

  return symbols;
}
*/

// Async Way
function getStockSymbols(stocks) {
  var symbols = [];

  stocks.forEach(function(stock){
    symbols.push(stock.symbol);
  })

  return symbols;
}

var symbols = getStockSymbols([
  { symbol: "DFG", price: 293.39, volume: 78848},
  { symbol: "SDF", price: 100.34, volume: 166778},
  { symbol: "DFG", price: 90.76, volume: 2344},
]);
