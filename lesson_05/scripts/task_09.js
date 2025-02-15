'use strict'

if (confirm(`Shall we start the test?`)) {
   let computerGuess;
   do {
      computerGuess = Math.floor(Math.random() * 5);
   } while (!confirm(`Computer thinks it is ${computerGuess}`));
   document.write(`Your number is ${computerGuess} 🎉`);
}