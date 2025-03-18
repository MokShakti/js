"use strict"

//Умова: Дано масив 30 випадкових цілих чисел. Підрахувати скільки було обмінів та порівнянь чисел під час сортування бульбашкою.

if (confirm(`Shall we start the test?`)) {
   const array = [42, 17, 56, 89, 23, 14, 67, 34, 90, 5, 73, 28, 61, 39, 99, 7, 16, 81, 48, 20, 3, 76, 53, 12, 30, 95, 66, 8, 41, 50];

   let bubbleChange
   let exchangeAmount = 0
   let compareAmount = 0
   let endInd = array.length
   do {
      bubbleChange = false
      for (let i = 1; i < endInd; i++) {
         compareAmount++
         if (array[i - 1] > array[i]) {
            const tmp = array[i - 1]
            array[i - 1] = array[i]
            array[i] = tmp
            bubbleChange = true
            exchangeAmount++
         }
      }
      endInd--
   } while (bubbleChange)
   document.write(`${array}<br>
      Total amount of exchanges is: ${exchangeAmount}<br>
      Total amount to compare is: ${compareAmount}
      `)
}
