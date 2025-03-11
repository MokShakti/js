'use strict'

if (confirm(`Shall we start the test?`)) {

   let prices = [950, 1200, 1200, 850, 1300, 1300, 1020];

   let priceChanges = prices.reduce((count, price, index, arr) => {
      if (index > 0 && price !== arr[index - 1]) {
         count++;
      }
      return count;
   }, 0);

   document.write(`Number of price changes: ${priceChanges}`);
}