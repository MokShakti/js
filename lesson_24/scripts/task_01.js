'use strict'

//Умова: Дано клас PhoneNumber. Створити функцію перетворення до string, при якому на основі номера виводиться оператор (050…. à MTC, 096… à Kyivstar, ….).

class PhoneNumber {
   constructor(number) {
      this.number = number
   }

   toString() {
      const prefix = this.number.substring(0, 3)
      let operator

      switch (prefix) {
         case `050`:
            operator = `MTC`
            break
         case `096`:
            operator = `Kyivstar`
            break
         case `067`:
            operator = `Kyivstar`
            break
         case `068`:
            operator = 'Vodafone'
            break;
         case `063`:
            operator = 'Lifecell'
            break
         default:
            operator = `Unknown`
      }
      return operator + `: ` + this.number
   }
}

const first = new PhoneNumber(`0507645628`)
console.log(first.toString())

const second = new PhoneNumber(`0968740936`)
console.log(second.toString())

const third = new PhoneNumber(`0307452978`)
console.log(third.toString())