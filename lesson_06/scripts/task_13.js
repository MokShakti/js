'use strict'

if (confirm(`Shall we start the test?`)) {
   let totalStudents = parseInt(prompt(`Enter the number of students in the class:`));
   let totalHeight = 0;

   for (let i = 0; i < totalStudents; i++) {
      let height = parseFloat(prompt(`Enter the height of student ` + (i + 1) + `:`));
      totalHeight += height;
   }

   let averageHeight = totalHeight / totalStudents;
   document.write(`The average height of the students in the class is: ` + averageHeight.toFixed(2));
}