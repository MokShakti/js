'use strict'

if (confirm(`Shall we start the test?`)) {
   let capital = parseFloat(prompt(`Enter the initial capital:`));
   let interestRate = parseFloat(prompt(`Enter the monthly interest rate:`));
   let targetAmount = parseFloat(prompt(`Enter the amount needed to buy the store:`));

   let months = 0;

   while (capital < targetAmount) {
      capital += capital * (interestRate / 100);
      months++;
   }

   let years = months / 12;
   document.write(`The entrepreneur will accumulate the required amount in ` + years.toFixed(2) + ` years.`);
}