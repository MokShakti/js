"use strict"

if (confirm(`Shall we start the test?`)) {
   let start = parseInt(prompt(`Enter the start of the range:`));
   let end = parseInt(prompt(`Enter the end of the range:`));
   let sum = 0;
   for (let i = start; i <= end; i++) {
      if (i % 2 !== 0) {
         sum += i;
      }
   }
   document.write(`Sum of odd numbers: ` + sum);
}