'use strict'

if (confirm(`Shall we start the test?`)) {
   let prices = [950, 1200, 850, 1300, 1020];

   let maxPrice = Math.max(...prices);

   let percentagePrices = prices.map(price => ((price / maxPrice) * 100).toFixed(2) + "%");

   document.write(percentagePrices);
}