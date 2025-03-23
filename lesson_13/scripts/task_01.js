'use strict'

//Умова: Генерація всіх підмножин: Реалізуйте рекурсивну функцію, яка генерує всі можливі підмножини заданого масиву. Наприклад, для масиву [1, 2, 3] можливі підмножини: [], [1], [2], [3], [1, 2], [1, 3], [2, 3], [1, 2, 3].

if (confirm(`Shall we start the test?`)) {
   function generateSubsets(arr) {
      const result = []

      function backtrack(start, subset) {
         result.push([...subset])

         for (let i = start; i < arr.length; i++) {
            subset.push(arr[i])
            backtrack(i + 1, subset)
            subset.pop()
         }
      }

      backtrack(0, [])
      return result
   }

   const arr = [1, 2, 3]
   const subsets = generateSubsets(arr)
   document.write(JSON.stringify(subsets))
}
