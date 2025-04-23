"use strict"

//Умова: Зробити конвертер валют (курси валют – константи у скрипті).

const rates = {
   USD: 1,
   EUR: 0.92,
   UAH: 38.5
};

function convertCurrency() {
   const amount = parseFloat(document.getElementById('amount').value)
   const from = document.getElementById('from').value
   const to = document.getElementById('to').value

   if (isNaN(amount)) {
      document.getElementById('result').textContent = 'Enter a valid number'
      return
   }

   const usdAmount = amount / rates[from]
   const converted = usdAmount * rates[to]

   document.getElementById('result').textContent =
      `${amount} ${from} = ${converted.toFixed(2)} ${to}`
}