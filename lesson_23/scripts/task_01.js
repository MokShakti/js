'use strict'

const arr = [`hello1`,
   `world`,
   `123`,
   `test`,
   `rhythm`,
   `Hello2World`,
   `NoDigits`]

const text = `05.04.2025 year, +12°C! Code: 4142-3433-2323-3434; call +380501234567.`
const url = `https://www.some.gov.ua`
const phone = `+380501234567`
const fullName = `Arthur Pendragon`
const dateStr = `05.04.2025`


// Задача 1. Дано масив рядків. Вивести ті, у яких є цифри(використати метод test та регулярні вирази).

let res1 = []

for (let i = 0; i < arr.length; i++) {
   if (/\d/.test(arr[i])) {
      res1.push(arr[i])
   }
}

console.log(`1)With digits:`, res1)

// -------------------------------------
// Задача 2. Дано масив рядків. Вивести ті, у яких немає цифр.

let res2 = []

for (let b = 0; b < arr.length; b++) {
   if (!/\d/.test(arr[b])) {
      res2.push(arr[b])
   }
}

console.log(`2) Without digits:`, res2)

// -------------------------------------
// Задача 3. Дано масив рядків. Вивести ті, у яких є голосні літери.

let vowelRegex = /[aeiou]/i
let res3 = []

for (let c = 0; c < arr.length; c++) {
   if (vowelRegex.test(arr[c])) {
      res3.push(arr[c])
   }
}

console.log(`3) With vowels:`, res3)

// -------------------------------------
// Задача 4. Дано масив рядків. Вивести ті, у яких немає голосних літер.

let res4 = []

for (let d = 0; d < arr.length; d++) {
   if (!vowelRegex.test(arr[d])) {
      res4.push(arr[d])
   }
}

console.log(`4) Without vowels:`, res4)

// -------------------------------------
// Задача 5. Дано масив рядків. Вивести ті, у яких є або цифра 1 або цифра 3.

let res5 = []

for (let e = 0; e < arr.length; e++) {
   if (/[13]/.test(arr[e])) {
      res5.push(arr[e])
   }
}

console.log(`5) Containing 1 or 3:`, res5)

// -------------------------------------
// Задача 6. Дано рядок тексту, вивести усі числа, які є у тексті.

let num = text.match(/\d+/g) || []

console.log(`6) Numbers in text:`, num)

// -------------------------------------
// Задача 7. Дано рядок тексту. Знайти усі знаки пунктуації, які були використано.

let punctuation = text.match(/[.,!?;:()"'-]/g) || []

console.log(`7) Punctuation marks:`, punctuation)

// -------------------------------------
// Задача 8. Дано рядок тексту. Вивести усі складові, які розділені розділовими знаками.

let rawParts = text.split(/[t\n\r.,!?;:()"'-]+/)

let res8 = []

for (let f = 0; f < arr.length; f++) {
   if (rawParts[f] !== "") {
      res8.push(rawParts[f])
   }
}

console.log(`8) Text parts:`, res8)

// -------------------------------------
// Задача 9. Дано рядок тексту. Перевірити, чи містить він дату у форматі dd.mm.yyyy(dd - день, mm - місяць, yyyy - рік).

let datePattern = /\b(0[1-9]|[12][0-9]|3[01])\.(0[1-9]|1[0-2])\.(\d{4})\b/

let hasDate = datePattern.test(text)

console.log(`9) Contains dd.mm.yyyy date?:`, hasDate)

// -------------------------------------
// Задача 10. Дано рядок тексту.Підрахувати кількість двоцифрових чисел у рядку.

let twoDigitMatches = text.match(/\b\d{2}\b/g) || []

console.log(`10) Two-digit numbers count:`, twoDigitMatches.length)

// -------------------------------------
// Задача 11. Визначити чи може бути рядок тексту номером банківської картки(приклад: «4142 - 3433 - 2323 - 3434»).Знайти усі такі номери.

let cardMatches = text.match(/\b\d{4}-\d{4}-\d{4}-\d{4}\b/g) || []

console.log(`11) Card numbers:`, cardMatches)

// -------------------------------------
// Задача 12. Дано адресу сайту.Визначити, чи є він урядовим(містить домен “gov”).

let isGovSite = url.includes(`.gov`)

console.log(`12) Government site?:`, isGovSite)

// -------------------------------------
// Задача 13. Вибрати усі роки після 2021 року з отриманого повідомлення.

let yearMatches = text.match(/\b20\d{2}\b/g) || []

let res13 = []

for (let g = 0; g < arr.length; g++) {
   let y = parseInt(yearMatches[g], 10)
   if (y > 2021) {
      res13.push(y)
   }
}

console.log(`13) Years after 2021:`, res13)

// -------------------------------------
// Задача 14. Дано номер телефону.Перевірити, чи є цей телефон телефоном з України(починаєтсья на «+38»).

let isUkrainianPhone = phone.startsWith(`+38`)

console.log(`14) Ukrainian phone?:`, isUkrainianPhone)

// -------------------------------------
// Задача 15. Користувач вводить прізвище та ім’я в одному рядку через пробіл.Замінити пробіл на дефіс.

let hyphenatedName = fullName.replace(" ", "-")

console.log(`15) Hyphenated name:`, hyphenatedName)

// -------------------------------------
// Задача 16. Користувач вводить дату у форматі «день.місяць.рік». Отримати рядкове представлення дати у форматі «день / місяць / рік».

let formattedDate = dateStr.replace(/\./g, `/`)

console.log(`16) Formatted date:`, formattedDate)

// -------------------------------------
// Задача 17. Користувач вводить день(номер дня(0 - 6) або «sun, mon, tue, wed, thu, fri, sat»).Визначити, чи  є це день вихідним.

function isWeekend(day) {
   if (typeof day === `number`) {
      return day === 0 || day === 6
   }
   let d = day.toLowerCase()
   return d === `sat` || d === `sun`
}

console.log(`17) Is 6 a weekend?:`, isWeekend(6))
console.log(`17) Is 'mon' a weekend?:`, isWeekend(`mon`))