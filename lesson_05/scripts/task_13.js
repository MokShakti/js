'use strict'

if (confirm(`Do you want to play Battleship?`)) {
   const N = 5;
   const M = 5;
   const K = 3;

   const shipRow = Math.floor(Math.random() * N);
   const shipCol = Math.floor(Math.random() * M);

   let destroyed = false;

   for (let hit = 1; hit < K; hit++) {
      const rowNum = parseInt(prompt(`Enter row number`))
      const colNum = parseInt(prompt(`Enter colum number`))

      if (rowNum === shipRow && colNum === shipCol) {
         destroyed = true
         break
      }
   }
   if (destroyed) alert(`You win!`)
   else alert(`Better luck next time!`)
}