"use strict"
//Дані
const unitPrice = parseFloat(prompt(`Enter unit's price`))
const amountOfMoney = parseFloat(prompt(`Enter your amount of money`))
const change = amountOfMoney - unitPrice

//Обчислення
if (isNaN(unitPrice) || isNaN(amountOfMoney)) {
   document.write(`Error: Enter the amount`)
}

switch (true) {
   case change < 0:
      document.write(`Not enough money to initiate transaction`)
      break;
   case change >= 0 && change < 4:
      document.write(`Transaction is successful. The change is ${change.toFixed(2)}zl.`)
      break;
   case change >= 4:
      document.write(`Transaction is successful. The change is ${change.toFixed(2)}zl. You have enough money to purchase our daily lottery for 4zl. Would you like to?`)
      break;
}
