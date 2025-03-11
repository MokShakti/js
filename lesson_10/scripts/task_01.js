"use strict"

if (confirm(`Shall we start the test?`)) {
   let arr = [300, 1200, 2000, 1000]
   let filtered = arr.filter(x => x > 1000)
   document.write(filtered)
   // let prices = []
   // for (let i = 0; i < 100; i++) {
   //    prices.push(Math.floor(Math.random() * 10000) + 1);
   // }

   // let filteredPrices = [];
   // for (let i = 0; i < prices.length; i++) {
   //    if (prices[i] > 1000) {
   //       filteredPrices.push(prices[i]);
   //    }
   // }

   // document.write("All prices: " + prices.join(", ") + "<br>");
   // document.write("Prices greater than 1000: " + filteredPrices.join(", ") + "<br>");
}
