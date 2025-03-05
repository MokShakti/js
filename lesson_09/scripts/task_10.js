'use strict'

if (confirm(`Shall we start the test?`)) {
   function calculateTaxes(prices, taxRate = 0.2) {
      let taxes = [];
      for (let price of prices) {
         taxes.push(price * taxRate);
      }
      return taxes;
   }

   function displayTaxes(taxes) {
      document.write(`<h2>Paid Taxes:</h2>`);
      for (let tax of taxes) {
         document.write(`<p>` + tax.toFixed(2) + ` UAH</p>`);
      }
   }

   let prices = [100, 500, 1200, 3000, 750];
   let taxes = calculateTaxes(prices);
   displayTaxes(taxes);
}