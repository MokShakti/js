'use strict'

//Умова: Дано масив хлопців і дівчат вивести всі можливі комбінації для танців з хлопців і дівчат.

if (confirm(`Shall we start the test?`)) {
   function generateDancePairs(boys, girls) {
      const results = []

      function backtrack(pairs, remainingBoys, remainingGirls) {
         if (remainingBoys.length === 0 || remainingGirls.length === 0) {
            results.push([...pairs])
            return
         }

         for (let i = 0; i < remainingBoys.length; i++) {
            for (let j = 0; j < remainingGirls.length; j++) {
               pairs.push(`${remainingBoys[i]} & ${remainingGirls[j]}`)

               const nextBoys = [...remainingBoys.slice(0, i), ...remainingBoys.slice(i + 1)]
               const nextGirls = [...remainingGirls.slice(0, j), ...remainingGirls.slice(j + 1)]

               backtrack(pairs, nextBoys, nextGirls)
               pairs.pop()
            }
         }
      }

      backtrack([], boys, girls)
      return results
   }

   const boys = ['John', 'Mike', 'Tom']
   const girls = ['Anna', 'Emma', 'Sophia']

   const dancePairs = generateDancePairs(boys, girls)

   for (const pairSet of dancePairs) {
      document.write(pairSet.join(', ') + '<br>')
   }
}

