'use strict'

//Умова: Дано масив імен. Застосовуючи відповідне сортування та бінарний пошук визначити, чи є у масиві ім’я «Olga» і під яким індексом.

if (confirm(`Shall we start the test?`)) {
   let arr = [`John`, `Anna`, `Olga`, `Mark`, `Sophia`]

   function insertionSort(arr) {
      for (let i = 1; i < arr.length; i++) {
         let key = arr[i]
         let j = i - 1
         while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j]
            j--
         }
         arr[j + 1] = key
      }
      return arr
   }

   function includesBinarySearch(arr, searchInd) {
      let start = 0
      let end = arr.length - 1
      while (start <= end) {
         const middle = Math.floor((start + end) / 2)
         if (arr[middle] === searchInd) return middle
         if (arr[middle] < searchInd) start = middle + 1
         else end = middle - 1
      }
      return -1
   }

   let sortedArray = insertionSort(arr)
   let searchName = `Olga`
   let index = includesBinarySearch(arr, searchName)

   document.write(`Original Array: ${arr.join(`, `)}<br>`);
   document.write(`Sorted Array: ${sortedArray.join(`, `)}<br>`);
   document.write(`Name '${searchName}' ${index !== -1 ? `found at index: ${index}` : "not found"} in sorted array.`)
}