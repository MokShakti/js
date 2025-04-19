'use strict'

//Умова: Дано два класи MultChecker (клас для перевірки таблиці множення - рандомно генеруються числа, які треба перемножати), AddChecker (клас для перевірки додавання - рандомно генеруються числа у заданому діапазоні, які треба додавати). Обидва класи надсилають результати тестування об'єкту класу Hystory, який зберігає історію тестування у масиві у вигляді об'єктів  Приклад:
// testsList = [
// { firstNum: 1, secondNum: 5, opration:’*’, userAnswer: 7, correctAnswer: 5},
// { firstNum: 3, secondNum: 4, opration:’+’, userAnswer: 7, correctAnswer: 7},]Можна створити окремий клас TestData, який описує один такий тест і у якому будуть ці поля.
// Розробити клас TestManager, який використовуючи ці класи за допомогою таймера періодично генерує якісь N задач(рандомно вибираємо, що опитувати: додавання чи множення) і проводить опитування.Результати тестування додаються в об’єкт History.Зробити так, щоб об'єкт такого класу можна було створити тільки один. Коли зроблено ці N задач вивести усю історію на екран.


if (confirm("Shall we start the test?")) {
   class TestData {
      constructor(firstNum, secondNum, operation, userAnswer, correctAnswer) {
         this.firstNum = firstNum
         this.secondNum = secondNum
         this.operation = operation
         this.userAnswer = userAnswer
         this.correctAnswer = correctAnswer
      }
   }

   class History {
      constructor() {
         this.testsList = []
      }

      add(testData) {
         this.testsList.push(testData)
      }

      showAll() {
         document.write("<h2>📜 Test History:</h2>")
         this.testsList.forEach((t, index) => {
            const isCorrect = t.userAnswer === t.correctAnswer ? "✅" : "❌"
            document.write(
               `<p>${index + 1}) ${t.firstNum} ${t.operation} ${t.secondNum} = ${t.userAnswer} (${isCorrect}, correct: ${t.correctAnswer})</p>`
            )
         })
      }
   }

   class MultChecker {
      static check(history) {
         const a = Math.floor(Math.random() * 10) + 1
         const b = Math.floor(Math.random() * 10) + 1
         const userAnswer = parseInt(prompt(`❓ What is ${a} * ${b}?`), 10)
         const correct = a * b
         history.add(new TestData(a, b, '*', userAnswer, correct))
      }
   }

   class AddChecker {
      static check(history) {
         const a = Math.floor(Math.random() * 50)
         const b = Math.floor(Math.random() * 50)
         const userAnswer = parseInt(prompt(`❓ What is ${a} + ${b}?`), 10)
         const correct = a + b
         history.add(new TestData(a, b, '+', userAnswer, correct))
      }
   }

   class TestManager {
      constructor(N) {
         if (TestManager.instance) {
            return TestManager.instance
         }

         this.N = N
         this.history = new History()
         this.counter = 0

         TestManager.instance = this
      }

      start() {
         const interval = setInterval(() => {
            if (this.counter >= this.N) {
               clearInterval(interval)
               this.history.showAll()
               return
            }

            const type = Math.random() < 0.5 ? "add" : "mult"
            if (type === "add") {
               AddChecker.check(this.history)
            } else {
               MultChecker.check(this.history)
            }

            this.counter++
         }, 1500)
      }
   }

   const manager = new TestManager(5)
   manager.start()
}