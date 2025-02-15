'use strict'

if (confirm(`Shall we start the test?`)) {
   let userNumber = parseInt(prompt("Enter a number from 1 to 5"));
   let attempts = 3;
   let guessed = false;

   for (let i = 1; i <= attempts; i++) {
      let computerGuess = Math.floor(Math.random() * 5) + 1;
      let message = `Guess ${i}: computer thinks it is ${computerGuess}.`;
      if (computerGuess === userNumber) {
         document.write(message + " 🎉 Computer wins!");
         guessed = true;
         break;
      } else {
         alert(message + " ❌ Incorrect.");
      }
   }
   if (!guessed) {
      document.write(`Computer did not guess! 😢 Entered number was ${userNumber}.`);
   }
}