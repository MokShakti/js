"use strict"

if (confirm(`Shall we start the test?`)) {
   function isWorkday(day) {
      switch (day) {
         case 1:
         case 2:
         case 3:
         case 4:
         case 5:
            return `Workday`;
         case 6:
         case 7:
            return `Weekend`;
         default:
            return `Invalid day`;
      }
   }

   let day = parseInt(prompt(`Enter day number (1-7)`));
   document.write(`The day is ${isWorkday(day)}.`);
}