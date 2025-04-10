'use strict'

//Умова: Створити клас TBankomat, який моделює роботу банкомата. Клас повинен містити поля для зберігання кількості купюр кожного із номіналів від 5 до 200 гривень. Реалізувати методи знаходження максимальної та мінімальної сум, які може видати банкомат, та метод зняття деякої суми.

if (confirm("Shall we start the test?")) {
   class TBankomat {
      constructor(banknote) {
         try {
            if (typeof banknote !== 'object') {
               throw new Error(`Banknotes should be an object.`)
            }
            this.#banknote = banknote
         } catch (error) {
            console.error(error.message)
         }
      }

      #banknote

      get banknote() {
         return this.#banknote
      }

      getMaxAmount() {
         try {
            let total = 0
            for (const denom in this.#banknote) {
               if (this.#banknote.hasOwnProperty(denom)) {
                  total += Number(denom) * this.#banknote[denom]
               }
            }
            return total
         } catch (error) {
            console.error(`Error calculating the max amount:`, error)
         }
      }

      getMinAmount() {
         try {
            let minDenom = Infinity
            let minAmount = 0
            for (const denom in this.#banknote) {
               if (this.#banknote.hasOwnProperty(denom) && this.#banknote[denom] > 0) {
                  if (Number(denom) < minDenom) {
                     minDenom = Number(denom)
                     minAmount = minDenom
                  }
               }
            }
            return minAmount
         } catch (error) {
            console.error(`Error calculating the min amount:`, error)
         }
      }

      withdraw(amount) {
         try {
            if (isNaN(amount) || amount <= 0) {
               throw new Error(`Invalid amount.`)
            }

            let withdrawal = {}
            let remainingAmount = amount

            if (this.getMaxAmount() < amount) {
               alert(`Not enough funds to withdraw!`)
               return null
            }

            for (let denom of Object.keys(this.#banknote).sort((a, b) => b - a)) {
               denom = Number(denom)
               if (this.#banknote[denom] > 0) {
                  let neededBills = Math.floor(remainingAmount / denom)
                  let billsToTake = Math.min(neededBills, this.#banknote[denom])

                  if (billsToTake > 0) {
                     withdrawal[denom] = billsToTake
                     remainingAmount -= billsToTake * denom
                     this.#banknote[denom] -= billsToTake
                  }
               }
            }

            if (remainingAmount > 0) {
               throw new Error(`Could not dispense the exact amount!`)
            }

            document.write(`Withdrawn amount: ${amount}<br>`)
            document.write(`Bills:<br>`)
            for (const denom in withdrawal) {
               document.write(`${withdrawal[denom]} x ${denom}<br>`)
            }

            return withdrawal
         } catch (error) {
            console.error(error.message)
         }
      }
   }

   const atm = new TBankomat({
      5: 10,
      10: 5,
      20: 5,
      50: 3,
      100: 2,
      200: 1
   })

   try {
      document.write(`Max amount: ${atm.getMaxAmount()}<br>`)
      document.write(`Min amount: ${atm.getMinAmount()}<br>`)

      const amountToWithdraw = parseInt(prompt(`How much money would you like to withdraw?`), 10)

      if (isNaN(amountToWithdraw) || amountToWithdraw <= 0) {
         throw new Error(`Invalid amount entered. Please enter a positive number.`)
      } else {
         atm.withdraw(amountToWithdraw)
      }
   } catch (error) {
      alert(error.message)
   }
}