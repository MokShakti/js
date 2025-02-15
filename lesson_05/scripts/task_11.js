'use strict'

if (confirm(`Shall we start the test?`)) {
   const startNum = parseInt(prompt(`Beginning of the interval`));
   const endNum = parseInt(prompt(`Ending of the interval`));

   let sum = 0
   for (let num = 0; num < 5;) {
      const compNum = startNum + Math.floor(Math.random() * (endNum - startNum + 1))
      document.write(`compNum : ${compNum}<br>`)
      if (compNum % 2 > 0) {
         sum += compNum
         num++
      }
   }
   document.write(`Sum = ${sum}`)
}