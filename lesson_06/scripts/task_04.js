"use strict"

if (confirm(`Shall we start the test?`)) {
   for (let i = 0; i < 82; i++) {
      if (i % 2 === 0) {
         document.write(`a`);
      } else {
         document.write(`o`);
      }
   }
}