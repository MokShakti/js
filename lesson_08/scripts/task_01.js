"use strict"
if (confirm(`Shall we start the test?`)) {
   function inputGrades(numGrades) {
      const gradesArray = [];
      for (let i = 0; i < numGrades; i++) {
         const grade = parseInt(prompt(`Enter grade (1-5)`));
         if (grade < 1 || grade > 5) {
            throw new Error(`Invalid grade`);
         }
         gradesArray.push(grade);
      }
      return gradesArray;
   }

   function calculateAverage(gradesArray) {
      let total = 0;
      for (let i = 0; i < gradesArray.length; i++) {
         total += gradesArray[i];
      }
      return total / gradesArray.length;
   }

   function determineCategory(avgGrade) {
      if (avgGrade >= 4.5) {
         return `excellent student`;
      } else if (avgGrade >= 3.5) {
         return `good student`;
      } else if (avgGrade >= 2.5) {
         return `mediocre student`;
      } else {
         return `failing student`;
      }
   }

   const numGrades = parseInt(prompt(`Enter the number of grades`));
   const studentGrades = inputGrades(numGrades);
   const avgGrade = calculateAverage(studentGrades).toFixed(2);
   const studentCategory = determineCategory(avgGrade);

   document.write(`Average grade: ${avgGrade} <br>Performance category: ${studentCategory}`);
}