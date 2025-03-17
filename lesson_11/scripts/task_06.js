'use strict'

//Умова: Знайти суми елементів у вказаній області (зафарбована область охоплює відповідну половину рядків і стовпців). Суму непарних стовпців.

if (confirm(`Shall we start the test?`)) {
   let matrix = [
      [1, 2, 3, 4, 5, 6, 7, 8],
      [9, 10, 11, 12, 13, 14, 15, 16],
      [17, 18, 19, 20, 21, 22, 23, 24],
      [25, 26, 27, 28, 29, 30, 31, 32]
   ];

   let sum = 0
   for (let i = 0; i < matrix.length; i++) {
      for (let j = 1; j < matrix[i].length; j += 2) {
         sum += matrix[i][j];
      }
   }

   document.write(`Sum of odd-indexed columns: ${sum}`);

}