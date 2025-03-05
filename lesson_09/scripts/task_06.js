'use strict'

if (confirm(`Shall we start the test?`)) {
   function getNumbers() {
      let arr = [];
      for (let i = prompt(`Enter count`); i > 0; i--) arr.push(prompt(`Enter number`));
      return arr;
   }

   function modifyArray(arr) {
      if (arr.length === 0) throw new Error(`Array is empty`);
      let firstElement = arr[0];
      return arr.map(num => num > firstElement ? num * 2 : num);
   }

   try {
      let numbers = getNumbers();
      let modifiedArray = modifyArray(numbers);
      document.write(`Modified array: ` + modifiedArray.join(`, `));
   } catch (e) {
      document.write(e.message);
   }
}