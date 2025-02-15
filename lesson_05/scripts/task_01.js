"use strict"

if (confirm(`Shall we start the test?`)) {
   const n = parseInt(prompt("Enter the quantity of random numbers"));
   document.write("<ul>");
   for (let i = 1; i <= n; i++) {
      const randomNum = Math.floor(Math.random() * 100);
      document.write(`<li>${randomNum}</li>`);
   }
   document.write("</ul>");
}