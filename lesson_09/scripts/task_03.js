"use strict"

if (confirm(`Shall we start the test?`)) {
   function getSize() {
      let size = parseInt(prompt(`Enter the number of elements:`));
      if (size <= 0) throw new Error(`Invalid value. Enter a number greater than 0.`);
      return size;
   }

   function createCustomArray(size) {
      return new Array(size).fill(1, 0, 5).fill(7, 5);
   }

   function displayArray(array) {
      document.write(`<p>Created array: [` + array + `]</p>`);
   }

   let size = getSize();
   let array = createCustomArray(size);
   displayArray(array);
}