"use strict"

if (confirm(`Shall we start the test?`)) {
   const students = [`Ivan`, `Maria`, `Petro`, `Ivan`, `Oksana`, `Ivan`, `Anna`];

   function countOccurrences(nameToFind) {
      let count = 0;
      for (let i = 0; i < students.length; i++) {
         if (students[i] === nameToFind) {
            count++;
         }
      }
      return count;
   }

   const nameToFind = prompt(`Enter the name to count:`);
   const count = countOccurrences(nameToFind);

   document.write(`The name ${nameToFind} appears ${count} times in the list.`);
}