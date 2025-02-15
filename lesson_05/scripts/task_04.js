"use strict"

if (confirm(`Shall we start the test?`)) {
   document.write(`<table>`);
   for (let row = 1; row <= 3; row++) {
      document.write(`<tr>`);
      for (let col = 1; col <= 7; col++) {
         document.write(`<td> ${col}</td>`);
      }
      document.write(`</tr>`);
   }
   document.write(`</table>`);
}