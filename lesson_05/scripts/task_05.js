"use strict"

if (confirm(`Shall we start the test?`)) {
   document.write(`<table>`);
   for (let row = 0; row < 3; row++) {
      document.write(`<tr>`);
      for (let col = 1; col <= 3; col++) {
         document.write(`<td>` + (row * 3 + col) + `</td>`);
      }
      document.write(`</tr>`);
   }
   document.write(`</table>`);
}