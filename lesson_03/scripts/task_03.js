"use strict"

//Дані
const minNum = 1
const maxNum = 5
const randomNum = Math.floor(Math.random() * (maxNum - minNum + 1))

//Обчислення

const firstGuess = parseInt(prompt(`Guess the number from 1 to 5`))
const secondGuess = parseInt(prompt(`Guess the number from 1 to 5`))

if (isNaN(firstGuess) || firstGuess < 1 || firstGuess > 5 || isNaN(secondGuess) || secondGuess < 1 || secondGuess > 5)
   document.write(`Incorrect! Please, choose number from 1 to 5 ONLY!!!`)
else if (firstGuess === randomNum)
   document.write(`Congrats! You won it from the first try! Number is ${randomNum}!`)
else if (secondGuess === randomNum)
   document.write(`Congrats! You won it from the second try! Number is ${randomNum}!`)
else
   document.write(`Incorrect! Given number is ${randomNum}`)
