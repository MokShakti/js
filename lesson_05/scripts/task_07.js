"use strict"

if (confirm(`Shall we start the test?`)) {
   let N = parseInt(prompt("Enter the section number:"));
   for (let i = 1; i <= N; i++) {
      document.write(`<h1>Title ${i}</h1>`);
      for (let p = 1; p <= i; p++) {
         document.write(`<p>Section ${i}, Paragraph ${p}</p>`);
      }
   }
}