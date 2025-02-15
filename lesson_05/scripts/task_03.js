"use strict"

if (confirm(`Shall we start the test?`)) {
   document.write(`<table>`);
   document.write(`<tr>`);
   for (let i = 1; i <= 7; i++) {
      document.write(`<td>${i}</td>`);
   }
   document.write(`</tr>`);
   document.write(`</table>`);
}