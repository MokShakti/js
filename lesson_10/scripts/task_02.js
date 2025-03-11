"use strict"

if (confirm(`Shall we start the test?`)) {
   let prices = [950, 1200, 850, 1300, 1020];

   let expensivePapers = prices
      .map((price, index) => (price > 1000 ? index + 1 : null))
      .filter(index => index !== null);

   document.write(`Generated prices: ${prices}<br>`);
   document.write(`Array with element's number: ${expensivePapers}`);
}