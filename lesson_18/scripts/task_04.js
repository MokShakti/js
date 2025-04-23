'use strict'

//Умова: Наперед задано у скрипті масив зі списком бажань. Після завантаження сторінки випадковим чином вибираються 3 і відображаються у окремих div (їх треба створити і додати на сторінку).

if (confirm("Shall we start the test?")) {
   const wishes = [
      "Travel to Japan",
      "Learn to play guitar",
      "Write a book",
      "Run a marathon",
      "Start a garden",
      "Read 50 books this year",
      "Build a treehouse",
      "Start a YouTube channel",
      "Try skydiving",
      "Master cooking Italian food"
   ]

   function getRandomWishes(arr, count = 3) {
      const shuffled = [...arr].sort(() => 0.5 - Math.random())
      return shuffled.slice(0, count)
   }

   window.addEventListener('DOMContentLoaded', () => {
      const wishesContainer = document.getElementById('wishesContainer')
      const selectedWishes = getRandomWishes(wishes, 3)

      selectedWishes.forEach(wish => {
         const wishDiv = document.createElement('div')
         wishDiv.className = 'wish-item'
         wishDiv.textContent = wish
         wishesContainer.appendChild(wishDiv)
      })
   })
}