"use strict"

//Дані
// const A = Motorcycle
// const B = Car
// const C = Truck

const licenseCategory = prompt(`Enter driver license category from A to C`)

//Обчислення

switch (licenseCategory) {
   case `A`:
      document.write(`Motorcycle`)
      break;
   case `B`:
      document.write(`Passenger car`)
      break;
   case `C`:
      document.write(`Truck`)
      break;
   default:
      document.write(`Driver license category does not exist`)
      break;
}