"use strict"
if (confirm(`Shall we start the test?`)) {
   let prices = [950, 1200, 850, 1300, 1020, 2000];

   let increasedPrices = prices.reduce((result, price, index, arr) => {
      if (index > 0 && price > arr[index - 1]) {
         result.push(price);
      }
      return result;
   }, []);

   document.write(increasedPrices);
}