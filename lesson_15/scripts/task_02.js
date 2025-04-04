"use strict"

//Умова: Створити об’єкт «Авто». Поля(властивості: Марка, Розмір бака, Кількість наявних літрів, Кількість місць, Кількість пасажирів. Методи (дії): Заправка на вказану кількість літрів, Виведення кількості пасажирів, Додавання пасажирів, Висадка пасажирів.

if (confirm(`Shall we start the test?`)) {
   class Car {
      constructor(brand, tankSize, fuel, seats, passengers) {
         this.brand = brand
         this.tankSize = tankSize
         this.fuel = fuel
         this.seats = seats
         this.passengers = passengers
      }

      refuel(liters) {
         if (liters <= 0) {
            document.write(`<p>❌ Enter a valid amount of fuel!</p>`)
            return
         }

         if (this.fuel + liters > this.tankSize) {
            document.write(`<p>⛽ Tank overflow! Added only ${this.tankSize - this.fuel} liters.</p>`)
            this.fuel = this.tankSize
         } else {
            this.fuel += liters
            document.write(`<p>⛽ Refueled ${liters} liters. Current fuel: ${this.fuel} liters.</p>`)
         }
      }

      showPassengers() {
         document.write(`<p>🚗 There are ${this.passengers} passengers in the car.</p>`)
      }

      addPassengers(count) {
         if (count <= 0) {
            document.write(`<p>❌ Enter a valid number of passengers!</p>`)
            return
         }

         if (this.passengers + count > this.seats) {
            document.write(`<p>❌ Not enough seats! You can add only ${this.seats - this.passengers} passengers.</p>`)
         } else {
            this.passengers += count
            document.write(`<p>✅ Added ${count} passengers. Now there are ${this.passengers} in the car.</p>`)
         }
      }

      removePassengers(count) {
         if (count <= 0) {
            document.write(`<p>❌ Enter a valid number of passengers!</p>`)
            return
         }

         if (this.passengers - count < 0) {
            document.write(`<p>❌ There are not that many passengers in the car!</p>`)
         } else {
            this.passengers -= count;
            document.write(`<p>✅ Removed ${count} passengers. ${this.passengers} remaining.</p>`)
         }
      }
   }

   const myCar = new Car(`Toyota`, 50, 20, 5, 2)

   myCar.showPassengers()
   myCar.addPassengers(2)
   myCar.removePassengers(1)
   myCar.refuel(10)
}