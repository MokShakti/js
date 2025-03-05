'use strict'

if (confirm(`Shall we start the test?`)) {
   function getUserArray() {
      let input = prompt(`Enter numbers separated by commas:`);
      return input.split(`,`).map(Number);
   }

   function displayLargeElements(array) {
      document.write(`<p>Elements greater than 100: `);
      for (let num of array) {
         if (num > 100) {
            document.write(num + ` `);
         }
      }
      document.write(`</p>`);
   }

   let array = getUserArray();
   displayLargeElements(array);
}