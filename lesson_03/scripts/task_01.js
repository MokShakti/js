"use strict"

//Дані
const firstChildName = prompt(`Enter first child's name`)
const secondChildName = prompt(`Enter second child's name`)

const firstChildCandies = parseInt(prompt(`Enter first child's candy quantity`))
const secondChildCandies = parseInt(prompt(`Enter second child's candy quantity`))

//Обчислення
// let total
if (firstChildCandies > secondChildCandies)
   document.write(`${firstChildName}`)
else if (firstChildCandies === secondChildCandies)
   document.write(`Same candies quantity`)
else if (isNaN(firstChildCandies) || isNaN(secondChildCandies))
   document.write(`You did not enter an amount of candies. Refresh the page and try again`)
else document.write(`${secondChildName}`)