"use strict"

//Умова: Знайти суми елементів у вказаній області (зафарбована область охоплює відповідну половину рядків і стовпців). Номери рядків від 0 до половини, стовпці від половини до кінця.

if (confirm(`Shall we start the test?`)) {
   let matrix = [
      [1, 2, 3, 4, 5, 6, 7, 8],
      [9, 10, 11, 12, 13, 14, 15, 16]
   ];

   let sum = 0;
   let rowLimit = Math.floor(matrix.length / 2);
   let colLimit = Math.floor(matrix[0].length / 2);

   for (let i = 0; i < rowLimit; i++) {
      for (let j = colLimit; j < matrix[i].length; j++) {
         sum += matrix[i][j];
      }
   }

   document.write(`Sum in the upper-right quadrant: ${sum}`);
}