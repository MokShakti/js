"use strict"

//Дані
const secondsInOneMinute = 60
const secondsInAnHour = 3600
// const hoursADay = 86400

const time = parseInt(prompt(`In order to find out current time, please, enter seconds that have passed from the beginning of the day`))

//Обчислення

const currentTime = Math.floor(time / secondsInAnHour)
const currentMinutes = Math.floor((time % secondsInAnHour) / secondsInOneMinute)

//Результат
document.write(`
   Current time is ${currentTime}hour(s) and ${currentMinutes}minute(s)
   `)