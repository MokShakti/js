"use strict"

if (confirm(`Shall we start the test?`)) {
   document.write(`<form>`);
   for (let i = 1; i <= 10; i++) {
      document.write(`
         <div>
         <label>Product price №${i}: 
            <input type="number" placeholder="Enter the price">
         </label>
         </div>
      `);
   }
   document.write(`</form>`);
}