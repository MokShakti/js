'use strict'

//Умова: Дано інформацію про прибуток К магазинів протягом тижня. Знайти: загальний прибуток кожного масиву за тиждень.

if (confirm(`Shall we start the test?`)) {
   function getRandomWeekNum(min, max) {
      return Math.floor(Math.random() * (max - min + 1))
   }

   function generateArray(weekNum, min, max) {
      let array = [];
      for (let i = 0; i < weekNum; i++) {
         array.push(getRandomWeekNum(min, max));
      }
      return array;
   }

   function generateMatrix(rows, cols, min, max) {
      let matrix = [];
      for (let i = 0; i < rows; i++) {
         matrix.push(generateArray(cols, min, max));
      }
      return matrix;
   }

   function calculateWeeklyIncome(matrix) {
      let incomes = [];
      for (let week of matrix) {
         let sum = 0;
         for (let day of week) {
            sum += day;
         }
         incomes.push(sum);
      }
      return incomes;
   }

   const profitMatrix = generateMatrix(3, 7, 1, 100);
   const weeklyIncomes = calculateWeeklyIncome(profitMatrix);

   document.write(`Weekly Income Data:<br>`);
   let shopIndex = 1;
   for (let week of profitMatrix) {
      document.write(`Shop ${shopIndex}: `);
      let dayIndex = 0;
      for (let day of week) {
         document.write(day);
         if (dayIndex < week.length - 1) {
            document.write(", ");
         }
         dayIndex++;
      }
      document.write(`<br>`);
      shopIndex++;
   }

   document.write(`<br>Total Weekly Income:<br>`);
   shopIndex = 1;
   for (let income of weeklyIncomes) {
      document.write(`Shop ${shopIndex}: ${income}<br>`);
      shopIndex++;
   }
}