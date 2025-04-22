"use strict"

//Умова: Розробити калькулятор.

function calculate() {
   const firstNumber = parseFloat(document.getElementById('num1').value)
   const secondNumber = parseFloat(document.getElementById('num2').value)
   const op = document.getElementById('operator').value
   let result

   if (isNaN(firstNumber) || isNaN(secondNumber)) {
      result = 'Please enter both numbers'
   } else {
      if (op === '+') result = firstNumber + secondNumber
      else if (op === '-') result = firstNumber - secondNumber
      else if (op === '*') result = firstNumber * secondNumber
      else if (op === '/') {
         result = secondNumber !== 0 ? firstNumber / secondNumber : 'Cannot divide by zero'
      } else {
         result = 'Unknown operator'
      }
   }

   document.getElementById('result').textContent = result
}
