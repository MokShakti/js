'use strict'

if (confirm(`Shall we start the test?`)) {
   for (let i = 0; i < 10; i++) {
      let num1 = parseInt(prompt(`Enter the first number of pair ` + (i + 1)));
      let num2 = parseInt(prompt(`Enter the second number of pair ` + (i + 1)));

      if (num1 > num2) {
         document.write(`The larger number in pair ` + (i + 1) + ` is: ` + num1 + `<br>`);
      } else {
         document.write(`The larger number in pair ` + (i + 1) + ` is: ` + num2 + `<br>`);
      }
   }
}