'use strict'

if (confirm(`Shall we start the test?`)) {
   let arr = [950, 1200, 1200, 850, 1300, 1300, 1020]

   let pricesMoreThan1000 = arr.every(x => x > 1000)

   document.write(pricesMoreThan1000 ? "All prices are greater than 1000" : "Not all prices are greater than 1000");
}