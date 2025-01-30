"use strict"

//Дані
const userAge = parseInt(prompt(`Enter user age`))

switch (true) {
   case (isNaN(userAge)):
      document.write(`Error: Enter the age`)
      break;
   case (userAge >= 0 && userAge <= 5):
      document.write(`Child in the kindergarden`)
      break;
   case (userAge >= 6 && userAge <= 17):
      document.write(`School student`)
      break;
   case (userAge >= 18 && userAge <= 26):
      document.write(`University student`)
      break;
   case (userAge >= 27 && userAge <= 55):
      document.write(`Employee`)
      break;
   case (userAge >= 56 && userAge <= 100):
      document.write(`Pensioner`)
      break;
   default:
      document.write(`Mutant`)
      break;
}

//Результат