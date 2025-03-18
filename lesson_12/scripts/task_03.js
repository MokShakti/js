"use strict"

//Умова: Дано масив 30 випадкових цілих чисел. Підрахувати скільки було обмінів та порівнянь чисел під час сортування включеннями.

if (confirm(`Shall we start the test?`)) {
   const array = [42, 17, 56, 89, 23, 14, 67, 34, 90, 5, 73, 28, 61, 39, 99, 7, 16, 81, 48, 20, 3, 76, 53, 12, 30, 95, 66, 8, 41, 50];

   let exchangeAmount = 0
   let compareAmount = 0
   let insertionSort, i

   for (let k = 1; k < array.length; k++) {
      compareAmount++
      insertionSort = array[k]
      i = k - 1
      while (i >= 0 && array[i] > insertionSort) {
         array[i + 1] = array[i]
         i = i - 1
         exchangeAmount++
      }
      array[i + 1] = insertionSort
   }
   document.write(`${array}<br>
      Total amount of exchanges is: ${exchangeAmount}<br>
      Total amount to compare is: ${compareAmount}
      `)
}