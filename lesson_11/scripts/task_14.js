'use strict'

//Умова: Дано інформацію про прибуток К магазинів протягом тижня. Відсортувати кожен тиждень за зростанням.

if (confirm(`Shall we start the test?`)) {
   let income = [
      [12, 87, 45, 63, 99, 34, 76],
      [54, 23, 78, 11, 435, 65, 32],
      [44, 98, 21, 56, 77, 88, 200]
   ]
   income.sort((day1, day2) => {
      if (day1 > day2) return 1
      else if (day1 < day2) return -1
      else return 0
   })
   document.write(income)
}