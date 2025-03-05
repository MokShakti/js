'use strict'

if (confirm(`Shall we start the test?`)) {
   function getUserInput() {
      return prompt(`Enter prices separated by commas (e.g., 500,1200,800,2000,1500,700):`);
   }

   function parsePrices(input) {
      let priceArray = input.split(`,`);
      let prices = [];
      for (let price of priceArray) {
         prices.push(Number(price));
      }
      return prices;
   }

   function applyDiscount(prices, threshold = 1000, discountRate = 0.3) {
      let discountedPrices = [];
      for (let price of prices) {
         let discountedPrice = price > threshold ? price * (1 - discountRate) : price;
         discountedPrices.push(discountedPrice.toFixed(2));
      }
      return discountedPrices;
   }

   function displayPrices(prices) {
      document.write(`<h2>Discounted Prices:</h2>`);
      for (let price of prices) {
         document.write(`<p>` + price + `</p>`);
      }
   }

   let input = getUserInput();
   let prices = parsePrices(input);
   let discountedPrices = applyDiscount(prices);
   displayPrices(discountedPrices);
}