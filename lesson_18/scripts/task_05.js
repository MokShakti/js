'use strict'

//Умова: Відобразити таблицю 3*4 з випадковими числами (її треба динамічно створити і вставити на сторінку).


function generateRandomNumber(min = 1, max = 99) {
   return Math.floor(Math.random() * (max - min + 1)) + min
}

function createTable(rows, cols) {
   const table = document.createElement('table')
   table.className = 'number-table'

   for (let i = 0; i < rows; i++) {
      const tr = document.createElement('tr')
      tr.className = 'number-table__row'

      for (let j = 0; j < cols; j++) {
         const td = document.createElement('td')
         td.className = 'number-table__cell'
         td.textContent = generateRandomNumber()
         tr.appendChild(td)
      }

      table.appendChild(tr)
   }

   return table
}

window.addEventListener('DOMContentLoaded', () => {
   const wrapper = document.getElementById('tableWrapper')
   const table = createTable(3, 4)
   wrapper.appendChild(table)
})