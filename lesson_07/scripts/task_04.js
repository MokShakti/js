"use strict"

if (confirm(`Shall we start the test?`)) {
   function analyzeNumbers(a, b, c) {
      let even = 0;
      let positive = 0;
      let greaterThan100 = 0;

      if (a % 2 === 0) even++;
      if (b % 2 === 0) even++;
      if (c % 2 === 0) even++;

      if (a > 0) positive++;
      if (b > 0) positive++;
      if (c > 0) positive++;

      if (a > 100) greaterThan100++;
      if (b > 100) greaterThan100++;
      if (c > 100) greaterThan100++;

      return { even, positive, greaterThan100 };
   }

   let a = parseInt(prompt(`Enter number 1:`));
   let b = parseInt(prompt(`Enter number 2:`));
   let c = parseInt(prompt(`Enter number 3:`));

   let result = analyzeNumbers(a, b, c);

   document.write(`<p>Even numbers: ${result.even}</p>`);
   document.write(`<p>Positive numbers: ${result.positive}</p>`);
   document.write(`<p>Numbers greater than 100: ${result.greaterThan100}</p>`);

}