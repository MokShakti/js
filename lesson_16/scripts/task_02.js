"use strict"

//Умова: Створити клас TMoney для роботи з грошовими сумами. Сума повинна зберігатися у вигляді доларового еквіваленту. Реалізувати методи додавання/вилучення грошової маси, вказуючи необхідну суму у гривнях, та визначення курсу долара, при якому сума у гривнях збільшиться на 100. Курс долара зберігати в окремому полі.

if (confirm(`Shall we start the test?`)) {

   class TMoney {
      constructor(uah, usd = 0, exchangeRate = 41) {
         try {
            this.#exchangeRate = exchangeRate
            this.#uah = uah
            this.#usd = usd || (uah / exchangeRate)
         } catch (error) {
            console.error(`Error in constructor:`, error)
         }
      }

      #exchangeRate
      get exchangeRate() {
         try {
            return this.#exchangeRate
         } catch (error) {
            console.error(`Error getting exchange rate:`, error)
         }
      }

      set exchangeRate(value) {
         try {
            if (value > 0) {
               this.#exchangeRate = value
            } else {
               throw new Error(`Invalid exchange rate`)
            }
         } catch (error) {
            console.error(error.message)
         }
      }

      #usd
      get usd() {
         try {
            return this.#usd.toFixed(2)
         } catch (error) {
            console.error(`Error getting USD value:`, error)
         }
      }

      #uah
      get uah() {
         try {
            return (this.#usd * this.#exchangeRate).toFixed(2)
         } catch (error) {
            console.error(`Error calculating UAH:`, error)
         }
      }

      addUAH(amountInUAH) {
         try {
            if (amountInUAH <= 0) {
               throw new Error(`Amount to add must be positive`)
            }
            this.#usd += amountInUAH / this.#exchangeRate
         } catch (error) {
            console.error(`Error adding UAH:`, error)
         }
      }

      subtractUAH(amountInUAH) {
         try {
            const usdToSubtract = amountInUAH / this.#exchangeRate

            if (usdToSubtract <= this.#usd) {
               this.#usd -= usdToSubtract
            } else {
               throw new Error(`Not enough funds`)
            }
         } catch (error) {
            console.error(`Error subtracting UAH:`, error)
         }
      }

      getRateForExtra100UAH() {
         try {
            if (this.#usd === 0) {
               return `Cannot calculate (USD = 0)`
            }
            const currentUAH = this.#usd * this.#exchangeRate
            return ((currentUAH + 100) / this.#usd).toFixed(2)
         } catch (error) {
            console.error(`Error calculating rate for extra 100 UAH:`, error)
         }
      }

      toString() {
         try {
            return `USD: ${this.usd}, UAH: ${this.#uah} (Rate: ${this.exchangeRate})`
         } catch (error) {
            console.error(`Error in toString:`, error)
         }
      }
   }

   try {
      const money = new TMoney(4000)
      document.write(money.toString() + "<br>")

      money.addUAH(800)
      document.write(money.toString() + "<br>")

      money.subtractUAH(1000)
      document.write(money.toString() + "<br>")

      document.write(`New rate for +100 UAH: ${money.getRateForExtra100UAH()}<br>`);
   } catch (error) {
      console.error(`Error in the main code block:`, error)
   }
}