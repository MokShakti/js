"use strict"

if (confirm(`Shall we start the test?`)) {
   for (let i = 10; i < 100; i++) {
      let tens = Math.floor(i / 10);
      let ones = i % 10;
      if (tens >= ones) {
         document.write(i + ` `);
      }
   }
}