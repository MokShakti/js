"use strict"
if (confirm(`Shall we start the test?`)) {
   let charCode = 65;
   let count = 0;
   for (let i = 0; i < 26; i++) {
      let letter = String.fromCharCode(charCode + i);
      document.write(letter + ` `);

      count++;

      if (count === 5) {
         document.write(`<br>`);
         count = 0;
      }
   }
}