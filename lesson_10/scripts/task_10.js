'use strict'

if (confirm(`Shall we start the test?`)) {
   let arr = [950, 1200, 1800, 850, 1300, 1400, 1020]

   let firstPriceGreaterThan1000 = arr.find(x => x > 1000)

   document.write(`First price that is greater than 1000 is: ${firstPriceGreaterThan1000}`)
}