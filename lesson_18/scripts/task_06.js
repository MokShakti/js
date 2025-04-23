"use strict"

//Умова: Користувач задає кількість оцінок і натискає на кнопку «get table». В результаті формується таблиця з input, куди користувач вводить оцінки. Після цього натискає на кнопку “get sum” і знаходить середнє значення.

function generateGradeTable() {
   const count = parseInt(document.getElementById('gradeCountInput').value)
   const container = document.getElementById('gradesContainer')
   const resultBox = document.getElementById('result')

   container.innerHTML = ''
   resultBox.textContent = ''

   if (isNaN(count) || count <= 0) {
      container.innerHTML = '<p class="grade-result">Please enter a valid number of grades.</p>'
      return
   }

   const table = document.createElement('table')
   table.className = 'grades-table'

   for (let i = 1; i <= count; i++) {
      const row = document.createElement('tr')

      const labelCell = document.createElement('td')
      labelCell.className = 'grades-table__cell'
      labelCell.textContent = `Grade ${i}`

      const inputCell = document.createElement('td')
      inputCell.className = 'grades-table__cell'

      const input = document.createElement('input')
      input.type = 'number'
      input.className = 'grade-input'
      input.min = '0'
      input.max = '100'

      inputCell.appendChild(input)
      row.appendChild(labelCell)
      row.appendChild(inputCell)
      table.appendChild(row)
   }

   container.appendChild(table)

   const calcButton = document.createElement('button')
   calcButton.className = 'grade-button'
   calcButton.textContent = 'Get Sum'
   calcButton.onclick = calculateAverage

   container.appendChild(calcButton)
}

function calculateAverage() {
   const inputs = document.querySelectorAll('#gradesContainer input')
   const resultBox = document.getElementById('result')

   let sum = 0
   let count = 0
   let hasInvalid = false

   inputs.forEach(input => {
      const value = parseFloat(input.value)
      if (!isNaN(value)) {
         sum += value
         count++
      } else {
         hasInvalid = true
      }
   })

   if (count === 0) {
      resultBox.textContent = 'Please fill in at least one grade.'
      return
   }

   const avg = (sum / count).toFixed(2);
   resultBox.textContent = hasInvalid
      ? `Average (ignoring empty cells): ${avg}`
      : `Average grade: ${avg}`
}