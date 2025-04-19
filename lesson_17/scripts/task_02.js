"use strict"

//Умова: Створити службове авто (водій, марка, номер). Створити клас таким чином, щоб можна було створити тільки один екземпляр цього класу.

if (confirm(`Shall we start the test?`)) {

   class ServiceCar {
      constructor(driver, brand, number) {
         if (ServiceCar.instance) {
            return ServiceCar.instance
         }

         this.driver = driver
         this.brand = brand
         this.number = number

         ServiceCar.instance = this
      }

      getInfo() {
         return `Driver: ${this.driver}, Brand: ${this.brand}, Номер: ${this.number}`
      }
   }

   const car1 = new ServiceCar(`Dean`, `Chevrolet Impala`, `KAZ 2Y5`);
   console.log(car1.getInfo())

   const car2 = new ServiceCar(`Sam`, `BMW`, `RWM4V15`);
   console.log(car2.getInfo());

   console.log(car1 === car2);
}