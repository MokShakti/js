"use strict"

//Умова: Розробити клас MultChecker для перевірки таблиці множення. Поля: Число, яке перевіряємо (наприклад, перевірка частини таблиці множення на 7). Кількість правильних відповідей, Кількість неправильних відповідей. Методи: Генерування прикладу(метод випадковим чином визначає друге число, перше число фіксоване). Перевірка правильності вказаної відповіді render - виведення інформації про тестування на екран.

if (confirm(`Shall we start the test?`)) {
   class MultChecker {
      constructor(fixedNumber) {
         this.fixedNumber = fixedNumber
         this.correctAnswers = 0
         this.wrongAnswers = 0
      }

      generateExample() {
         this.randomNumber = Math.floor(Math.random() * 10) + 1
         return `${this.fixedNumber} × ${this.randomNumber} = ?`
      }

      checkAnswer(userAnswer) {
         const correctAnswer = this.fixedNumber * this.randomNumber

         if (parseInt(userAnswer) === correctAnswer) {
            this.correctAnswers++
            document.write(`<p>✅ Correct! ${this.fixedNumber} × ${this.randomNumber} = ${correctAnswer}</p>`)
         } else {
            this.wrongAnswers++
            document.write(`<p>❌ Wrong! ${this.fixedNumber} × ${this.randomNumber} = ${correctAnswer}, not ${userAnswer}</p>`)
         }
      }

      render() {
         document.write(`<h2>Multiplication Test for ${this.fixedNumber}</h2>`)
         document.write(`<p>✅ Correct answers: ${this.correctAnswers}</p>`)
         document.write(`<p>❌ Wrong answers: ${this.wrongAnswers}</p>`)
      }
   }

   const checker = new MultChecker(7)

   for (let i = 0; i < 5; i++) {
      let question = checker.generateExample()
      let userAnswer = prompt(question)
      checker.checkAnswer(userAnswer)
   }

   checker.render()
}