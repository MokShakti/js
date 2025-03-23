'use strict'

//Умова: Виведіть всі можливі наступні комбінації ходів користувачів у грі“Хрестики-нулики”, починаючи з деякої заданої ситуації (тобто маємо двовимірний масив з елементами : 0 - нулик, Х - хрестик, пробіл - ще не зайнято, і вам треба самостійно вивести всі можливі шляхи заповнення ще незаповнених клітинок (де пробіли). Поки можна не підраховувати чи вже є 3 хрестики чи 3 нулики у рядок.

if (confirm(`Shall we start the test?`)) {
   function generateTicTacToeMoves(board, player) {
      const results = [];

      function backtrack(board, turn) {
         for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
               if (board[i][j] === ' ') {
                  board[i][j] = turn;
                  results.push(board.map(row => row.join(' ')).join('\n'));
                  backtrack(board, turn === 'X' ? 'O' : 'X');
                  board[i][j] = ' ';
               }
            }
         }
      }

      backtrack(board.map(row => row.slice()), player);
      return results;
   }

   const board = [
      ['X', 'O', ' '],
      [' ', 'X', 'O'],
      [' ', ' ', 'X']
   ];

   const moves = generateTicTacToeMoves(board, 'O');

   for (const move of moves) {
      document.write('<pre>' + move + '</pre><br>');
   }
}
