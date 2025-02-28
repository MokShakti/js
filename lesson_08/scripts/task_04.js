'use strict'

if (confirm(`Shall we start the test?`)) {
   const carNumbers = [`A123BC`, `B456CD`, `A789DE`, `C321AC`, `D654BB`, `E777EE`, `A111AA`];

   function countStartingWithA(numbers) {
      let count = 0;
      for (let i = 0; i < numbers.length; i++) {
         if (numbers[i].startsWith(`A`)) {
            count++;
         }
      }
      return count;
   }

   function countMatchingFirstLast(numbers) {
      let count = 0;
      for (let i = 0; i < numbers.length; i++) {
         if (numbers[i][0] === numbers[i][numbers[i].length - 1]) {
            count++;
         }
      }
      return count;
   }

   function countMoreThanFiveChars(numbers) {
      let count = 0;
      for (let i = 0; i < numbers.length; i++) {
         if (numbers[i].length > 5) {
            count++;
         }
      }
      return count;
   }

   document.write(`Number of car plates starting with 'A': ` + countStartingWithA(carNumbers) + `<br>`);
   document.write(`Number of car plates where first and last letter match: ` + countMatchingFirstLast(carNumbers) + "<br>");
   document.write(`Number of car plates with more than 5 characters: ` + countMoreThanFiveChars(carNumbers));

}