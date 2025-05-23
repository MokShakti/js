'use strict'

//Умова: Створити генератор, який би випадковим чином поступово генерував вказану кількість парних чисел.

function* randEvenGen(count) {
   for (let i = 0; i < count; i++) {
      yield Math.floor(Math.random() * 50) * 2
   }
}

for (const num of randEvenGen(5)) {
   console.log(num)
}