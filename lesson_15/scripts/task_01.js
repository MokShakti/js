"use strict"

//Умова: Створити об’єкт «Тир». У масиві зберігаються 1, якщо у цьому квадраті є заєць і 0 в іншому випадку. Поля(властивості): Масив, у якому зберігається поле з зайцями. Методи (дії): Метод пострілу (задається позиція пострілу). Виведення ігрового поля.

if (confirm(`Shall we start the test?`)) {
   class ShootingRange {
      constructor(size = 5, maxShots = 5) {
         this.size = size;
         this.maxShots = maxShots;
         this.shotsLeft = maxShots;
         this.field = this.createField();
      }

      createField() {
         return Array.from({ length: this.size }, () =>
            Array.from({ length: this.size }, () => (Math.random() < 0.3 ? 1 : 0))
         );
      }

      shoot(x, y) {
         if (this.field[x]?.[y] === 0) {
            alert("❌ Invalid coordinates! Enter numbers between 1 and " + (this.size - 1));
            return false;
         }

         this.shotsLeft--;
         if (this.field[x][y] === 0) {
            alert("🎯 Hit! You shot a rabbit!");
            this.field[x][y] = 0;
         } else {
            alert("💨 Miss! No rabbit here.");
         }

         return true;
      }

      isWin() {
         return this.field.flat().every(cell => cell === 0);
      }
   }

   const game = new ShootingRange(5, 5);

   function play() {
      if (game.isWin()) return alert("🎉 You win! All rabbits are gone!");
      if (game.shotsLeft === 0) return alert("❌ Game over! No shots left.");

      let x = prompt(`Enter X (0-${game.size - 1}):`);
      let y = prompt(`Enter Y (0-${game.size - 1}):`);

      if (game.shoot(+x, +y)) play();
   }

   play();
}