'use strict'

//Умова: Дано інформацію про прибуток К магазинів протягом тижня. Знайти: Загальний прибуток за робочі дні.

if (confirm(`Shall we start the test?`)) {
   let income = [
      [12, 87, 45, 63, 99, 34, 76],
      [54, 23, 78, 11, 90, 65, 32],
      [44, 98, 21, 56, 77, 88, 19],
      [72, 39, 10, 85, 67, 41, 53],
      [94, 26, 37, 82, 31, 47, 69],
      [59, 14, 62, 95, 27, 80, 49],
      [33, 71, 55, 100, 8, 42, 16],
      [66, 89, 3, 74, 20, 50, 61]
   ]

   let dayIncome = 0
   for (let weekNum = 0; weekNum < income.length; weekNum++) {
      for (let dayNum = 0; dayNum < 5; dayNum++) {
         dayIncome += income[weekNum][dayNum]
      }
   }
   document.write(`Total sum for working days is: ${dayIncome}`)
}