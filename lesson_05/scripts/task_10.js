'use strict'

if (confirm(`Shall we start the test?`)) {
   const a = parseInt(prompt(`Beginning of the interval`));
   const b = parseInt(prompt(`Ending of the interval`));
   let sum = 0;

   if (a > b) {
      let temp = a;
      a = b;
      b = temp;
   }

   for (let i = a + 1; i < b; i++) {
      if (i % 2 !== 0) sum += i;
   }

   document.write(`Sum = ${sum}`);
}