"use strict"

if (confirm(`Shall we start the test?`)) {
   let size = parseInt(prompt(`Enter the number of elements:`));
   if (size <= 0) {
      throw new Error(`Invalid value. Enter a number greater than 0.`);
   }
   let array = new Array(size).fill(0);
   document.write(`<p>Created array: [` + array + `]</p > `);
}