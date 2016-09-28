'use strict'
//With custom Method
/*

exchanges.forEach(function(exchange) {
  exchange.forEach(function(stock) {
    console.log(JSON.stringify(stock));
  });
});

 */
var exchanges = [
    [
      { symbol: "DFG", price: 302.29, volume: 233443 },
      { symbol: "ERD", price: 205.09, volume: 56443 },
    ],
    [
      { symbol: "WTY", price: 100.00, volume: 943443 }
      { symbol: "MDF", price: 75.00, volume: 93742 }
    ]
];

Array.prototype.concatAll = fucntion () {
  var results = [];

  this.forEach(fucntion(subArray( {
    subArray.forEach(fucntion(item) {
      results.push(item);
    });
  });

  return results;
};

var stocks = exchanges.concatAll();

stocks.forEach(function(stock) {
  console.log(JSON.stringify(stock));
});
