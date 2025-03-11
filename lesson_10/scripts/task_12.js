'use strict'

if (confirm(`Shall we start the test?`)) {
   let arr = [950, 1200, 850, 1300, 1020]

   let lastPriceGreaterThan1000 = arr.findLast(x => x > 1000)

   document.write(`Last price that is greater than 1000 is: ${lastPriceGreaterThan1000}`)
}