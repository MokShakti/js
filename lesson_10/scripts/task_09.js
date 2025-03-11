'use strict'

if (confirm(`Shall we start the test?`)) {
   let arr = [950, 1200, 1800, 850, 1300, 1400, 1020]

   let sumOfAllPrices = arr
      .filter(price => price > 1000)
      .reduce((total, price) => total + price, 0)

   document.write(`Sum of prices greater than 1000: ${sumOfAllPrices}`)
}