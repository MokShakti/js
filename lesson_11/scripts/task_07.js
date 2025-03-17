'use strict'

//Умова: Знайти суми елементів у вказаній області (зафарбована область охоплює відповідну половину рядків і стовпців). У парних рядках – непарні стовпці, у непарних – парні.

if (confirm(`Shall we start the test?`)) {
   let matrix = [
      [1, 2, 3, 4, 5, 6, 7, 8],
      [9, 10, 11, 12, 13, 14, 15, 16],
      [17, 18, 19, 20, 21, 22, 23, 24],
      [25, 26, 27, 28, 29, 30, 31, 32]
   ];

   function sumOddColumnsInEvenRows(matrix) {
      let sum = 0;
      for (let i = 0; i < matrix.length; i += 2) {
         for (let j = 1; j < matrix[i].length; j += 2) {
            sum += matrix[i][j];
         }
      }
      return sum;
   }

   function sumEvenColumnsInOddRows(matrix) {
      let sum = 0;
      for (let i = 1; i < matrix.length; i += 2) {
         for (let j = 0; j < matrix[i].length; j += 2) {
            sum += matrix[i][j];
         }
      }
      return sum;
   }

   document.write(`Sum of odd columns in even rows: ${sumOddColumnsInEvenRows(matrix)}<br>`);
   document.write(`Sum of even columns in odd rows: ${sumEvenColumnsInOddRows(matrix)}`);
}