'use strict'

//Умова: З використанням замикань розробити ітератор, тобто функцію, що буде поступово за окремими викликами видавати по одне значення від заданого мінімального до заданого максимального. Якщо значення досягне максимального, то наступним буде мінімальне значення. З використанням цієї функції реалізувати перебір номерів місяців.

if (confirm(`Shall we start the test?`)) {
   function createCyclingIterator(min, max) {
      let current = min - 1
      return function () {
         current = current < max ? current + 1 : min
         return current
      };
   }

   const monthIterator = createCyclingIterator(1, 12)

   for (let i = 0; i < 15; i++) { // 
      document.write(`Month: ${monthIterator()}<br>`)
   }
}

