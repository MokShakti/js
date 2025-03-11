'use strict'

if (confirm(`Shall we start the test?`)) {
   let arr = [950, 1200, 850, 1300, 1020];

   let index = arr.findIndex(price => price > 1000);

   document.write(`Index of the first price greater than 1000: ${index}`);
}