"use strict"

//Умова: Створити клас, що дозволяє виконувати такі операції над масивами: знаходження кількості додатних, кількості від’ємних, кількість входжень деякого числа (статичні методи).

if (confirm(`Shall we start the test?`)) {

   class ArrayAnalyzer {
      static countPositive(arr) {
         return arr.filter(num => num > 0).length
      }

      static countNegative(arr) {
         return arr.filter(num => num < 0).length
      }

      static countOccurrences(arr, target) {
         return arr.filter(num => num === target).length
      }
   }

   const testArray = [1, -2, 3, 0, -5, 3, 3];

   console.log(`Positive:`, ArrayAnalyzer.countPositive(testArray))
   console.log(`Negative:`, ArrayAnalyzer.countNegative(testArray))
   console.log(`Ocuurences:`, ArrayAnalyzer.countOccurrences(testArray, 3))
}
