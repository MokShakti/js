'use strict'

if (confirm(`Shall we start the test?`)) {
   const grades = [2, 3, 5, 4, 2, 5, 3, 4, 2, 5];

   function countTwos(grades) {
      let count = 0;
      for (let i = 0; i < grades.length; i++) {
         if (grades[i] === 2) {
            count++;
         }
      }
      return count;
   }

   function countGoodGrades(grades) {
      let count = 0;
      for (let i = 0; i < grades.length; i++) {
         if (grades[i] === 4 || grades[i] === 5) {
            count++;
         }
      }
      return count;
   }

   function countBelowAverage(grades) {
      let count = 0;
      for (let i = 0; i < grades.length; i++) {
         if (grades[i] < 3) {
            count++;
         }
      }
      return count;
   }

   document.write(`Number of twos: ` + countTwos(grades) + "<br>");
   document.write(`Number of good grades (4 and 5): ` + countGoodGrades(grades) + "<br>");
   document.write(`Number of grades below average: ` + countBelowAverage(grades));
}