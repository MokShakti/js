'use strict'

if (confirm(`Shall we start the test?`)) {
   let totalVisitors = parseInt(prompt(`How many people visited the gym today?`));
   let minAge = Infinity;
   let maxAge = -Infinity;
   let totalAge = 0;

   for (let i = 0; i < totalVisitors; i++) {
      let age = parseInt(prompt(`Enter the age of visitor number ` + (i + 1)));

      if (age < minAge) {
         minAge = age;
      }

      if (age > maxAge) {
         maxAge = age;
      }

      totalAge += age;
   }

   let averageAge = totalAge / totalVisitors;

   document.write(`Youngest visitor: ` + minAge + `<br>`);
   document.write(`Oldest visitor: ` + maxAge + `<br>`);
   document.write(`Average age: ` + averageAge.toFixed(2));
}