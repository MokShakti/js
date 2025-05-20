'use strict'

// ================Date===============//

// Задача 1. Виводити на екран скільки хвилин користувач вже на сайті.

function trackMinutesOnSite() {
   const startTime = new Date()
   setInterval(() => {
      const now = new Date()
      const diff = now - startTime
      const minutes = Math.floor(diff / 60000)
      console.log(`You have been on the site for ${minutes} minute(s)`)
   }, 60000)
}

// -----------------------------------------
// Задача 2. Вводимо час початку процедури (процедура триває 30хв). Визначити, чи процедура ще триває.

function isProcedureOngoing(startTimeString) {
   const start = new Date(startTimeString)
   const end = new Date(start.getTime() + 30 * 60000)
   return new Date() <= end
}

// -----------------------------------------
// Задача 3. Визначити скільки залишилось до кінця робочого дня (до 17.00).

function timeUntilWorkEnd() {
   const now = new Date()
   const end = new Date()
   end.setHours(17, 0, 0, 0)
   const diff = end - now
   if (diff <= 0) {
      return `Workday has ended`
   }
   const hours = Math.floor(diff / 3600000)
   const minutes = Math.floor((diff % 3600000) / 60000)
   return `${hours} hour(s) and ${minutes} minute(s) until 17:00`
}

// -----------------------------------------
// Задача 4. Створити функцію, яка дозволяє визначити, чи знаходиться вказана дата і час у межах поточного тижня (від понеділка 0 год, 0хв, до неділі 23год.59хв).

function isInCurrentWeek(dateString) {
   const date = new Date(dateString)
   const now = new Date()
   const day = now.getDay()
   const diffToMonday = (day + 6) % 7
   const monday = new Date(now)
   monday.setDate(now.getDate() - diffToMonday)
   monday.setHours(0, 0, 0, 0)
   const sunday = new Date(monday)
   sunday.setDate(monday.getDate() + 6)
   sunday.setHours(23, 59, 59, 999)
   return date >= monday && date <= sunday
}

// -----------------------------------------
// Задача 5. При заході на сайт вітати користувача або відображати повідомлення про те,  скільки хвилин залишилось до початку робочого дня (початок о 8.00).

function greetUser() {
   const now = new Date()
   const start = new Date()
   start.setHours(8, 0, 0, 0)
   if (now >= start) {
      console.log(`Hello!`)
   } else {
      const diff = start - now
      const minutes = Math.ceil(diff / 60000)
      console.log(`Workday starts in ${minutes} minute(s)`)
   }
}

// -----------------------------------------
// Задача 6. Вивести скільки зараз годин у Лондоні, Парижі, Сіднеї.

function showWorldTimes() {
   const london = new Date().toLocaleTimeString(`en-US`, { timeZone: `Europe/London`, hour: `2-digit`, minute: `2-digit` })
   const paris = new Date().toLocaleTimeString(`en-US`, { timeZone: `Europe/Paris`, hour: `2-digit`, minute: `2-digit` })
   const sydney = new Date().toLocaleTimeString(`en-US`, { timeZone: `Australia/Sydney`, hour: `2-digit`, minute: `2-digit` })
   console.log(`London: ${london}`)
   console.log(`Paris: ${paris}`)
   console.log(`Sydney: ${sydney}`)
}

// -----------------------------------------
// Задача 7. Дано список студентів (ім’я і дата народження: у формі тексту (день.місяць.рік). Знайти найстаршого студента.

function findOldestStudent(students) {
   let oldest = students[0]
   for (let i = 1; i < students.length; i++) {
      const [day, month, year] = students[i].dob.split('.').map(Number)
      const date = new Date(year, month - 1, day)
      const [oDay, oMonth, oYear] = oldest.dob.split('.').map(Number)
      const oldDate = new Date(oYear, oMonth - 1, oDay)
      if (date < oldDate) {
         oldest = students[i]
      }
   }
   return oldest.name
}


// -----------------------------------------
// Задача 8. Визначити скільки пройшло секунд після заходу на сайт перш ніж користувач зробив рух мишкою.

function timeToFirstMouseMove() {
   const start = performance.now()
   function handler() {
      const sec = ((performance.now() - start) / 1000).toFixed(2)
      console.log(`First mouse move after ${sec} second(s)`)
      window.removeEventListener(`mousemove`, handler)
   }
   window.addEventListener(`mousemove`, handler)
}

// -----------------------------------------
// Задача  9. Користувачка планувала оформила дектретну відпустку на 200 днів (дата початку відпустки вводиться). Визначити чи відпустка вже триває і чи не закінчилась.

function isMaternityLeaveActive(startDateString) {
   const start = new Date(startDateString)
   const end = new Date(start.getTime() + 200 * 86400000)
   const now = new Date()
   return now >= start && now <= end
}

// -----------------------------------------
// Задача 10 . Дано дата виробництва йогурта (вводимо рік, місяць, день) та кількість днів придатності. Визначити чи є він придатним на даний момент.

function isYogurtFresh(prodDateString, shelfDays) {
   const prod = new Date(prodDateString)
   const expiry = new Date(prod.getTime() + shelfDays * 86400000)
   return new Date() <= expiry
}

// -----------------------------------------
// Задача 11. Сформувати масив з 1000 елементів від 1 до 800. Порівняти час сортування бульбашкою і  вставкою.

function bubbleSort(arr) {
   const A = arr.slice();
   for (let i = 0; i < A.length; i++) {
      let swapped = false;
      for (let j = 0; j < A.length - 1 - i; j++) {
         if (A[j] > A[j + 1]) {
            [A[j], A[j + 1]] = [A[j + 1], A[j]];
            swapped = true;
         }
      }
      if (!swapped) break;
   }
   return A;
}

function insertionSort(arr) {
   const A = arr.slice();
   for (let i = 1; i < A.length; i++) {
      const key = A[i];
      let j = i - 1;
      while (j >= 0 && A[j] > key) {
         A[j + 1] = A[j];
         j--;
      }
      A[j + 1] = key;
   }
   return A;
}

function compareSorts() {
   const size = 1000;
   const max = 800;
   const arr = Array.from({ length: size }, () => Math.floor(Math.random() * max) + 1);
   const t0 = performance.now();
   bubbleSort(arr);
   const t1 = performance.now();
   insertionSort(arr);
   const t2 = performance.now();
   console.log(`Bubble sort: ${(t1 - t0).toFixed(2)}ms`);
   console.log(`Insertion sort: ${(t2 - t1).toFixed(2)}ms`);
}

// Example usage:
trackMinutesOnSite()
console.log(`Procedure ongoing:`, isProcedureOngoing(new Date().toISOString()))
console.log(`Time until work end:`, timeUntilWorkEnd())
console.log(`Today in current week:`, isInCurrentWeek(new Date().toISOString()))
greetUser()
showWorldTimes()
const students = [
   { name: `Alice`, dob: `15.05.1995` },
   { name: `Bob`, dob: `20.01.1993` },
   { name: `Charlie`, dob: `12.12.1990` }
]
console.log(`Oldest student:`, findOldestStudent(students))
timeToFirstMouseMove()
console.log(`Maternity leave active:`, isMaternityLeaveActive(`2025-01-01`))
console.log(`Yogurt fresh:`, isYogurtFresh(`2025-05-01`, 30))
compareSorts()