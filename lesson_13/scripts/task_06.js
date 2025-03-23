'use strict'

//Умова: З використанням замикань розробити ітератор, тобто функцію, що буде поступово за окремими викликами видавати по одну букву наперед заданого слова. З використанням нього розробити гру «Перекладач». Виводимо для користувача опис цього слова і по одну букву користувач вводить переклад цього слова. Підрахувати кількість вгаданих букв.

if (confirm(`Shall we start the test?`)) {
   function createLetterIterator(word) {
      let index = 0
      return function () {
         if (index < word.length) {
            return word[index++]
         } else {
            return null
         }
      }
   }

   function playTranslatorGame(word, description) {
      const letterIterator = createLetterIterator(word)
      let correctGuesses = 0
      let userInput

      alert(`Translate the word: ${description}`)

      for (let i = 0; i < word.length; i++) {
         userInput = prompt(`Enter letter ${i + 1}:`).toLowerCase()
         const correctLetter = letterIterator()
         if (userInput === correctLetter) {
            correctGuesses++
         }
      }

      alert(`You guessed ${correctGuesses} out of ${word.length} letters correctly!`)
   }

   const word = "apple"
   const description = "A popular fruit, often red or green"
   playTranslatorGame(word, description)
}
