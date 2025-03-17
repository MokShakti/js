'use strict'

//Умова: Морський бій: Випадковим чином на двовимірному полі розміром 6 * 6 розташовується 5 кораблів.Користувач стріляє вказуючи координати.Гра продовжується поки не потоплено усі кораблі або у користувача не закінчаться снаряди.

if (confirm(`Shall we start the test?`)) {
   const gridSize = 6;
   const numShips = 5;
   let shotsLeft = 10;

   let ships = [];

   while (ships.length < numShips) {
      let x = Math.floor(Math.random() * gridSize);
      let y = Math.floor(Math.random() * gridSize);

      let exists = false;
      for (let ship of ships) {
         if (ship[0] === x && ship[1] === y) {
            exists = true;
            break;
         }
      }

      if (!exists) {
         ships.push([x, y]);
      }
   }

   alert(`Welcome to Battleship!`);
   alert(`Grid size: 6x6. Enter coordinates (0-5).`);

   while (shotsLeft > 0 && ships.length > 0) {
      let x = parseInt(prompt(`Enter row (0-5):`), 10);
      let y = parseInt(prompt(`Enter column (0-5):`), 10);

      if (isNaN(x) || isNaN(y) || x < 0 || x >= gridSize || y < 0 || y >= gridSize) {
         alert(`❌ Invalid input! Enter numbers between 0 and 5.`);
         continue;
      }

      let hit = false;
      for (let i = 0; i < ships.length; i++) {
         if (ships[i][0] === x && ships[i][1] === y) {
            alert(`🔥 Hit! Ship destroyed!`);
            ships.splice(i, 1);
            hit = true;
            break;
         }
      }

      if (!hit) {
         console.log(`💦 Miss!`);
      }

      shotsLeft--;
      alert(`Shots left: ${shotsLeft}`);
   }

   if (ships.length === 0) {
      document.write(`🎉 Congratulations! You destroyed all the ships!`);
   } else {
      alert(`💀 Game over! You ran out of shots.`);
   }
}