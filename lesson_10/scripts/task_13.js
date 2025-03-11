'use strict'

if (confirm(`Shall we start the test?`)) {
   let arr = [950, 1200, 850, 1300, 1020]

   let lastIndexPriceGreaterThan1000 = arr.findLastIndex(x => x > 1000)

   document.write(`Last index that is greater than 1000 is: ${lastIndexPriceGreaterThan1000}`)
}
