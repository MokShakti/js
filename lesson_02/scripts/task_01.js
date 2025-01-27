"use strict"

//Дані
const firstNumber = parseFloat(prompt(`First Number`))
const secondNumber = parseFloat(prompt(`Second Number`))

//Обчислення
//Знайти суму:
const sum = firstNumber + secondNumber
//Знайти добуток:
const multiply = firstNumber * secondNumber
//Знайти частку двох дійсних чисел:
const division = firstNumber / secondNumber

//Результат
document.write(`
   <table>
      <thead>
         <tr>
            <th>Find the sum:</th>
            <th>Result of multiply:</th>
            <th>Result of division:</th>
         </tr>
      </thead>
      <tbody>
         <tr>
            <td>${sum}</td>
            <td>${multiply}</td>
            <td>${division}</td>
         </tr>
      </tbody>
   </table>
         `)
