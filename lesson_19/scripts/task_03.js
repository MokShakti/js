"use strict"

//Умова: Дано 5 випадковим чином згенерованих нумерованих списків з рандомними числами (кількість елементів у списку випадкова від 1 до 10, елементи випадкові – від 1 до 100). При натисненні на кнопку нумеровані списки з парною кількістю елементів зафарбувати у зелений колір, інші у червоний.

function randInt(min, max) {
   return Math.floor(Math.random() * (max - min + 1)) + min
}

const container = document.getElementById('listsContainer')
const genBtn = document.getElementById('generateBtn')
const colorBtn = document.getElementById('colorBtn')

genBtn.addEventListener('click', () => {
   container.innerHTML = ''

   for (let i = 0; i < 5; i++) {
      const isEvenList = Math.random() < 0.5
      const ol = document.createElement('ol')

      ol.dataset.parity = isEvenList ? 'even' : 'odd'

      const len = randInt(1, 10)
      for (let j = 0; j < len; j++) {
         let num
         if (isEvenList) {

            num = (randInt(1, 50) * 2);
         } else {

            num = (randInt(0, 49) * 2 + 1)
         }
         const li = document.createElement('li')
         li.textContent = num
         ol.append(li)
      }

      container.append(ol)
   }
})

colorBtn.addEventListener('click', () => {

   const lists = container.querySelectorAll('ol')
   lists.forEach(ol => {

      ol.classList.remove('list-colored-even', 'list-colored-odd')

      if (ol.dataset.parity === 'even') {
         ol.classList.add('list-colored-even')
      } else {
         ol.classList.add('list-colored-odd')
      }
   })
})