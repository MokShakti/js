"use strict"

if (confirm(`Shall we start the test?`)) {

   function sum(a, b, c, d) {
      return a + b + c + d;
   }

   function product(a, b, c, d) {
      return a * b * c * d;
   }

   function average(a, b, c, d) {
      return (a + b + c + d) / 4;
   }

   function minValue(a, b, c, d) {
      return Math.min(a, b, c, d);
   }

   let a = parseInt(prompt(`Enter number 1:`));
   let b = parseInt(prompt(`Enter number 2:`));
   let c = parseInt(prompt(`Enter number 3:`));
   let d = parseInt(prompt(`Enter number 4:`));

   document.write(`<p>Sum: ${sum(a, b, c, d)}</p>`);
   document.write(`<p>Product: ${product(a, b, c, d)}</p>`);
   document.write(`<p>Average: ${average(a, b, c, d)}</p>`);
   document.write(`<p>Minimum: ${minValue(a, b, c, d)}</p>`);
}