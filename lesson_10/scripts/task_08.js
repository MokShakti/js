'use strict'

if (confirm(`Shall we start the test?`)) {
   let arr = [950, 1200, 1800, 850, 1300, 1400, 1020]

   let pricesQuantityForMoreThan1000 = arr.filter(x => x > 1000)

   document.write(`Quantity of prices more than 1000 is: ${pricesQuantityForMoreThan1000}`)
}