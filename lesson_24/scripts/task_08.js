'use strict'

//Умова: Дано масив показів температур. Підрахувати кількість входжень кожного із показів let temperatures = [12.4, 24.9, 10.6, 12.4, 24.9, 12.4, 10.6, 11.9]Заокруглити вверх значення та підрахувати кількість різних показів.

const temperatures = [12.4, 24.9, 10.6, 12.4, 24.9, 12.4, 10.6, 11.9]

const counts = {}
let uniqueSet = new Set()

for (const t of temperatures) {
   const r = Math.ceil(t)
   counts[r] = (counts[r] || 0) + 1

   uniqueSet = new Set([...uniqueSet, r])
}

console.log(counts)

console.log(`Distinct readings:`, uniqueSet.size)