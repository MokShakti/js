'use strict'

//Умова: Тренажер додавання. Кожні 10 секунд користувачу задають випадковий приклад з додавання двох цифр і робиться перевірка.

if (confirm(`Shall we start the test?`)) {
   function generateAdditionExercise() {
      const num1 = Math.floor(Math.random() * 10)
      const num2 = Math.floor(Math.random() * 10)
      const correctAnswer = num1 + num2

      const userAnswer = prompt(`What is ${num1} + ${num2} equals to?`)

      if (parseInt(userAnswer) === correctAnswer) {
         alert(`Correct Answer!`)
      }
      else {
         alert(`Wrong answer! Correct answer is ${correctAnswer}!`)
      }
   }
   function startAdditionTrainer() {
      setInterval(generateAdditionExercise, 10000)
   }

   if (confirm(`Start the addition trainer?`)) {
      startAdditionTrainer()
   }
}
