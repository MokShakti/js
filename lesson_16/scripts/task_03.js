"use strict"

//Умова: Об’єкт “Фірма” (використати члени-класи). Поля: назва фірми; дата заснування (рік, місяць); послуги (назва послуги, вартість, термін виконання); адреси філіалів (країна, місто, вулиця, номер будинку). Методи: визначення кількості років існування фірми; виведення всіх філіалів фірми у вказаному місті; виведення на екран послуг, що можуть бути виконані за вказану суму грошей та вказаний термін часу.

if (confirm(`Shall we start the test?`)) {
   class Firm {
      constructor(name, year, month, currency = `zł`) {
         try {
            this.#name = name
            this.#year = year
            this.#month = month
            this.currency = currency
            this.services = []
            this.branches = []
         } catch (error) {
            console.error(`Error in constructor:`, error)
         }
      }

      #name
      #year
      #month

      get name() {
         try {
            return this.#name
         } catch (error) {
            console.error(`Error getting name:`, error)
         }
      }

      get year() {
         try {
            return this.#year
         } catch (error) {
            console.error(`Error getting year:`, error)
         }
      }

      get month() {
         try {
            return this.#month
         } catch (error) {
            console.error(`Error getting month:`, error)
         }
      }

      addServices(name, price, days) {
         try {
            this.services.push({ name, price, days })
         } catch (error) {
            console.error(`Error adding service:`, error)
         }
      }

      addBranch(country, city, street, house) {
         try {
            this.branches.push({ country, city, street, house })
         } catch (error) {
            console.error(`Error adding branch:`, error)
         }
      }

      getYears() {
         try {
            const currentYear = new Date()
            let years = currentYear.getFullYear() - this.year
            if ((currentYear.getMonth() + 1) < this.month) years--
            return years
         } catch (error) {
            console.error(`Error calculating years:`, error)
         }
      }

      showBranchesInCity(city) {
         try {
            return this.branches.filter(branch => branch.city.toLowerCase() === city.toLowerCase())
         } catch (error) {
            console.error(`Error showing branches in city:`, error)
         }
      }

      getServicesByBudgetAndTime(maxPrice, maxDays) {
         try {
            return this.services.filter(s => s.price <= maxPrice && s.days <= maxDays)
         } catch (error) {
            console.error(`Error getting services by budget and time:`, error)
         }
      }
   }

   try {
      const myFirm = new Firm(`Dissapointment`, 2020, 4, "zł")

      myFirm.addServices(`Create website`, 1000, 10)
      myFirm.addServices(`Design logo`, 300, 2)
      myFirm.addServices(`SMM`, 400, 7)

      myFirm.addBranch(`Poland`, `Gdańsk`, `Grunwaldzka`, 347)
      myFirm.addBranch(`Poland`, `Krakow`, `Chylonska`, 37)

      document.write(`Firm age: ${myFirm.getYears()} years<br><br>`)

      document.write(`Branches in Gdańsk:<br>`)
      myFirm.showBranchesInCity(`Gdańsk`).forEach(b => {
         document.write(`${b.street} ${b.house}, ${b.city}<br>`);
      })

      document.write(`<br>Services up to 500${myFirm.currency} and max 5 days:<br>`)
      myFirm.getServicesByBudgetAndTime(500, 5).forEach(s => {
         document.write(`${s.name} — ${s.price}${myFirm.currency}, ${s.days} days<br>`)
      });
   } catch (error) {
      console.error(`Error in the main code block:`, error)
   }
}