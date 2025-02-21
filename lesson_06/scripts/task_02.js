"use strict"

if (confirm(`Shall we start the test?`)) {
   for (let i = 1; i <= 5; i++) {
      for (let j = 1; j <= i; j++) {
         document.write(`o`);
      }
      document.write(`<br>`);
   }
}