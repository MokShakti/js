'use strict'

//Умова: Розробити клас «Керівник танців». Поля: Масив імен хлопців; Масив імен дівчат. Методи: Метод випадкового вибору імені хлопця; Метод випадкового вибору імені дівчини; Метод виведення пари для танців; Метод run, який ініціює через кожні 5 секунд виведення нової пари для танців.

if (confirm(`Shall we start the test?`)) {
   class DanceManager {
      constructor() {
         this.boys = ["John", "Alex", "Michael", "James", "David"]
         this.girls = ["Anna", "Mary", "Sophia", "Olivia", "Emily"]
      }

      getRandomBoy() {
         const randomIndex = Math.floor(Math.random() * this.boys.length)
         return this.boys[randomIndex]
      }

      getRandomGirl() {
         const randomIndex = Math.floor(Math.random() * this.girls.length)
         return this.girls[randomIndex]
      }

      generatePair() {
         const boy = this.getRandomBoy()
         const girl = this.getRandomGirl()
         return `${boy} and ${girl} — your dance partners!`
      }

      run() {
         setInterval(() => {
            const pair = this.generatePair()
            document.write(`<p>${pair}</p>`)
         }, 5000)
      }
   }

   const danceManager = new DanceManager()

   danceManager.run()
}