"use strict"

//Умова: Створити клас TDate для роботи із датами у форматі “день.місяць.рік”. Дата представляється структурою із трьома полями. Реалізувати методи збільшення/зменшення дати на певну кількість днів, місяців чи років. Введення та виведення дати реалізувати за допомогою методу toString.

if (confirm(`Shall we start the test?`)) {
   class TDate {
      constructor(year, month, day) {
         this.#year = year;
         this.#month = month;
         this.#day = day;
      }

      isLeapYear(year) {
         return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
      }

      #year;
      get year() {
         return this.#year;
      }
      set year(newYear) {
         try {
            const daysInMonth = this.getDaysInMonth(this.month, newYear);
            if (this.day > daysInMonth) {
               this.day = daysInMonth;
            }
            this.#year = newYear;
         } catch (error) {
            console.error(`Error while setting year: ${error.message}`);
         }
      }

      addYears(years) {
         try {
            const newYears = this.year + years;
            const daysInMonth = this.getDaysInMonth(this.month, newYears);
            if (this.day > daysInMonth) this.day = daysInMonth;
            this.year = newYears;
         } catch (error) {
            console.error(`Error while adding years: ${error.message}`);
         }
      }
      subtractYears(years) {
         this.addYears(-years);
      }

      #month;
      get month() {
         return this.#month;
      }
      set month(newMonth) {
         try {
            if (newMonth >= 1 && newMonth <= 12) {
               const daysInMonth = this.getDaysInMonth(newMonth, this.year);
               if (this.day > daysInMonth) {
                  this.day = daysInMonth;
               }
               this.#month = newMonth;
            } else {
               throw new Error("Invalid month");
            }
         } catch (error) {
            console.error(`Error while setting month: ${error.message}`);
         }
      }

      addMonths(months) {
         try {
            let totalMonths = this.month + months;
            let newYears = this.year + Math.floor((totalMonths - 1) / 12);
            let newMonth = ((totalMonths - 1) % 12) + 1;

            const daysInNewMonth = this.getDaysInMonth(newMonth, newYears);
            if (this.day > daysInNewMonth) this.day = daysInNewMonth;

            this.month = newMonth;
            this.year = newYears;
         } catch (error) {
            console.error(`Error while adding months: ${error.message}`);
         }
      }
      subtractMonths(months) {
         this.addMonths(-months);
      }

      #day;
      get day() {
         return this.#day;
      }
      set day(newDay) {
         try {
            const daysInMonth = this.getDaysInMonth(this.month, this.year);
            if (newDay >= 1 && newDay <= daysInMonth) {
               this.#day = newDay;
            } else {
               throw new Error("Invalid day");
            }
         } catch (error) {
            console.error(`Error while setting day: ${error.message}`);
         }
      }

      addDays(days) {
         try {
            while (days > 0) {
               const daysInCurrentMonth = this.getDaysInMonth(this.month, this.year);
               const daysLeft = daysInCurrentMonth - this.day;

               if (days <= daysLeft) {
                  this.day += days;
                  return;
               } else {
                  days -= (daysLeft + 1);
                  this.day = 1;
                  this.addMonths(1);
               }
            }
         } catch (error) {
            console.error(`Error while adding days: ${error.message}`);
         }
      }

      subtractDays(days) {
         try {
            while (days > 0) {
               if (this.day > days) {
                  this.day -= days;
                  return;
               } else {
                  days -= this.day;
                  this.subtractMonths(1);
                  this.day = this.getDaysInMonth(this.month, this.year);
               }
            }
         } catch (error) {
            console.error(`Error while subtracting days: ${error.message}`);
         }
      }

      getDaysInMonth(month, year) {
         const daysInMonth = [31, this.isLeapYear(year) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
         return daysInMonth[month - 1];
      }

      toString() {
         return `${this.day}.${this.month}.${this.year}`;
      }
   }

   const testDate = new TDate(15, 10, 2023);
   document.write(`${testDate.toString()}<br>`);

   testDate.addYears(5);
   document.write(`${testDate.toString()}<br>`);

   testDate.addMonths(3);
   document.write(`${testDate.toString()}<br>`);

   testDate.addDays(40);
   document.write(`${testDate.toString()}<br>`);

   testDate.subtractMonths(2);
   document.write(`${testDate.toString()}<br>`);
}