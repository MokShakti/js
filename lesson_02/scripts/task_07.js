"use strict"

//Дані
const randomMinMonth = 1
const randomMaxMonth = 12
const randomMinDay = 0
const randomMaxDay = 6

//Обчислення
const randomMonth = randomMinMonth + Math.floor(Math.random() * (randomMaxMonth - randomMinMonth + 1))
const randomDay = randomMinDay + Math.floor(Math.random() * (randomMaxDay - randomMinDay + 1))
const randomTotal = randomMonth + randomDay

//Результат
document.write(`
   Total of a random month number ${randomMonth} and random day ${randomDay} equals to ${randomTotal}
   `)