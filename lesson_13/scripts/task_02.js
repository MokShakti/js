'use strict'

//Умова: Дано масив імен спортсменів. Розробити програму для виведення усіх можливих результатів змагань (списки імен у відповідності до місць, які вони займуть).

if (confirm(`Shall we start the test?`)) {
   function generatePermutations(arr) {
      const result = [];

      function backtrack(permutation, remaining) {
         if (remaining.length === 0) {
            result.push([...permutation])
            return
         }

         for (let i = 0; i < remaining.length; i++) {
            permutation.push(remaining[i])
            backtrack(permutation, [...remaining.slice(0, i), ...remaining.slice(i + 1)])
            permutation.pop()
         }
      }

      backtrack([], arr)
      return result
   }

   const arr = [`Alice`, `Bob`, `Charlie`];
   const permutations = generatePermutations(arr)
   document.write(permutations.map(p => p.join(', ')).join('<br>'))
}
