'use strict'

//Умова: Дано масив імен. Застосовуючи відповідне сортування та бінарний пошук визначити, чи є у масиві ім’я довжиною 5 символів і під яким індексом.

if (confirm(`Shall we start the test?`)) {
   let arr = ["John", "Anna", "Olga", "Mark", "Sophi", "Alexa"];

   function insertionSort(arr) {
      for (let i = 1; i < arr.length; i++) {
         let key = arr[i];
         let j = i - 1;
         while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j--;
         }
         arr[j + 1] = key;
      }
      return arr;
   }

   function binarySearchByLength(arr, length) {
      let start = 0, end = arr.length - 1;
      while (start <= end) {
         let middle = Math.floor((start + end) / 2);
         if (arr[middle].length === length) return middle;
         if (arr[middle].length < length) start = middle + 1;
         else end = middle - 1;
      }
      return -1;
   }

   let sortedArray = insertionSort([...arr]);
   let nameLength = 5;
   let index = binarySearchByLength(sortedArray, nameLength);

   document.write(`Original Array: ${arr.join(", ")}<br>`);
   document.write(`Sorted Array: ${sortedArray.join(", ")}<br>`);
   document.write(`Name with length ${nameLength} ${index !== -1 ? `found at index: ${index}` : "not found"} in sorted array.`);
}