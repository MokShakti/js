'use strict'

if (confirm(`Shall we start the test?`)) {
   function getFirstLetters(names) {
      let firstLetters = [];
      for (let name of names) {
         firstLetters.push(name[0]);
      }
      return firstLetters;
   }

   let names = [`Alice`, `Bob`, `Charlie`, `David`, `Eva`];
   let firstLetters = getFirstLetters(names);

   document.write(firstLetters);
}