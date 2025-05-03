'use strict'

//Умова: Дано 3 таблиці розмірності 3*3 з випадковими числами. Якщо відбувається клік на якійсь із клітинок, то до відповідної таблиці додається червона рамка (спробуйте додати можливість відображення кількості кліків біля назви таблиці з використанням відповідно доданого для цього атрибута).

function randInt(min, max) {
   return Math.floor(Math.random() * (max - min + 1)) + min
}

const wrapper = document.getElementById('tablesWrapper')

for (let t = 1; t <= 3; t++) {
   const container = document.createElement('div')
   container.classList.add('table-container')

   const title = document.createElement('h3')
   title.textContent = `Таблиця ${t} `
   const counterSpan = document.createElement('span')
   counterSpan.textContent = '(0)'
   title.append(counterSpan)

   const table = document.createElement('table')

   table.dataset.clickCount = '0'

   for (let i = 0; i < 3; i++) {
      const row = document.createElement('tr')
      for (let j = 0; j < 3; j++) {
         const cell = document.createElement('td')
         cell.textContent = randInt(1, 100)
         row.append(cell)
      }
      table.append(row)
   }

   table.addEventListener('click', event => {
      const td = event.target.closest('td')
      if (!td) return

      table.classList.add('selected')

      let count = parseInt(table.dataset.clickCount, 10) + 1
      table.dataset.clickCount = count
      counterSpan.textContent = `(${count})`
   })

   container.append(title)
   container.append(table)

   wrapper.append(container)
}