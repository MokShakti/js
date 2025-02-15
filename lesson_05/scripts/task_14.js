'use strict'

if (confirm(`Shall we start the test?`)) {
   let totalAmount = 1000;
   let amountPaid = 0;

   do {
      let amount = parseFloat(prompt(`You have to pay ${totalAmount} zl. Enter your amount: `));

      if (isNaN(amount) || amount <= 0) {
         alert(`Please, enter the correct price`);
      } else {
         amountPaid += amount;
         if (amountPaid < totalAmount) {
            alert(`You paid ${amountPaid} zl. It is ${totalAmount - amountPaid} zl left.`);
         }
      }
   } while (amountPaid < totalAmount);

   alert("Transaction is successful!");
}