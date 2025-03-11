'use strict'

if (confirm(`Shall we start the test?`)) {

   let arr = [950, 1200, 1200, 850, 1300, 1300, 1020]

   let filtered = arr.filter(x => x < 1000)

   document.write(filtered)
}