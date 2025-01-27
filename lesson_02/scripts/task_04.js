"use strict"

//Дані

const smLength = 1000
const meterLength = parseFloat(prompt(`Enter Meters Length`))
const kmLength = parseFloat(prompt(`Enter Kilometers Length`))

//Обчислення

const totalMeters = meterLength / 100
const totalKilometers = kmLength / 100000

//Результат
document.write(`
   Centimeter(s) entered equals ${totalMeters}m and ${totalKilometers.toFixed(2)}km.
   `)