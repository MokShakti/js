'use strict'

//Умова: Для розглянутих методів сортування спробувати вивести етапи сортування шляхом виведення відповідних таблиць за зразком. Тобто кожного разу після обміну елементів вивести поточний стан масиву на екран (стрілки не потрібні).

if (confirm(`Shall we start the test?`)) {
   const array = [42, 17, 56, 89, 23]
   //Bubble Sort
   function bubbleSort(array) {
      let arr = [...array]
      let endInd = array.length
      let bubbleChange
      let steps = `<table border='1'><tr><th>Bubble Sort</th></tr>`
      do {
         bubbleChange = false
         for (let i = 0; i < endInd; i++) {
            if (arr[i - 1] > arr[i]) {
               const tmp = arr[i - 1]
               arr[i - 1] = arr[i]
               arr[i] = tmp
               bubbleChange = true
               steps += `<tr><td>${arr.join(`, `)}</td></tr>`
            }
         }
         endInd--
      } while (bubbleChange)
      return steps
   }

   //Coctail Sort
   function coctailSort(array) {
      let arr2 = [...array]
      let leftInd = 0
      let rightInd = array.length - 1
      let step = `<table border='1'><tr><th>Coctail Sort</th></tr>`

      while (leftInd < rightInd) {
         let coctailSort = false
         for (let i = leftInd + 1; i <= rightInd; i++) {
            if (arr2[i - 1] > arr2[i]) {
               let tmp = arr2[i - 1]
               arr2[i - 1] = arr2[i]
               arr2[i] = tmp
               coctailSort = true
               step += `<tr><td>${arr2.join(`, `)}</td></tr>`
            }
         }
         rightInd--
         if (coctailSort === false) break
         coctailSort = false
         for (let i = rightInd; i > leftInd; i--) {
            if (arr2[i - 1] > arr2[i]) {
               let tmp = arr2[i - 1]
               arr2[i - 1] = arr2[i]
               arr2[i] = tmp
               coctailSort = true
               step += `<tr><td>${arr2.join(`, `)}</td></tr>`
            }
         }
         leftInd++
         if (coctailSort === false) break
      }
      return step
   }

   //Insertion Sort
   function insertionSort(array) {
      let arr3 = [...array]
      let stp = `<table border='1'><tr><th>Insertion Sort</th></tr>`
      let insertionSort, i

      for (let k = 1; k < arr3.length; k++) {
         insertionSort = arr3[k]
         i = k - 1
         while (i >= 0 && arr3[i] > insertionSort) {
            arr3[i + 1] = arr3[i]
            i = i - 1
         }
         arr3[i + 1] = insertionSort
         stp += `<tr><td>${arr3.join(", ")}</td></tr>`
      }
      return stp
   }

   document.write(`Original Array: ${array}<br>`)
   document.write(`
      <div style='display: flex; gap: 20px;'>
         ${bubbleSort(array)}
         ${coctailSort(array)}
         ${insertionSort(array)}
      </div>
      `)
}