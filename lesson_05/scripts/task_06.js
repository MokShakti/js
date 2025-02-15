"use strict"

if (confirm(`Shall we start the test?`)) {
   let number = 1;
   for (let t = 1; t <= 3; t++) {
      document.write(`<table>`);
      for (let row = 0; row < 3; row++) {
         document.write(`<tr>`);
         for (let col = 0; col < 3; col++) {
            document.write(`<td>${number}</td>`);
            number++;
         }
         document.write(`</tr>`);
      }
      document.write(`</table>`);
   }
}