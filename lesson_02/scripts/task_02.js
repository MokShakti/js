"use strict"
//Дані
const birthYear = parseInt(prompt(`Enter your year of birth`))
const currentYear = 2025

//Обчислення
const age = currentYear - birthYear

//Результат
document.write(`
<h1>Your age is</h1><span>${age}</span>
   `)
