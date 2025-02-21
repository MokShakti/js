"use strict"

if (confirm(`Shall we start the test?`)) {
   let sum = 1000;
   for (let i = 0; i < 20; i++) sum *= 1.2;
   for (let i = 0; i < 17; i++) sum *= 1.27;
   document.write(sum.toFixed(2));
}