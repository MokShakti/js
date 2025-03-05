'use strict'

if (confirm(`Shall we start the test?`)) {
   function getUserArray() {
      let arr = [];
      for (let i = prompt(`Enter the number of elements`); i > 0; i--) {
         arr.push(prompt(`Enter a number`));
      }
      return arr;
   }

   function getProductOfPositiveNumbers(arr) {
      let product = 1, hasPositive = false;
      for (let num of arr) if (num > 0) product *= num, hasPositive = true;
      if (!hasPositive) throw new Error(`No positive numbers in the array`);
      return product;
   }

   try {
      document.write(`Product of positive elements: ` + getProductOfPositiveNumbers(getUserArray()));
   } catch (error) {
      document.write(error.message);
   }
}