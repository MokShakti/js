'use strict'

//Умова: Розробити функцію, у яку передають об’єкт (день, місяць, рік). Визначити, який буде рік через N місяців.

if (confirm(`Shall we start the test?`)) {
   let userDate = {
      day: 2,
      month: 7,
      year: 1996
   }

   function getYear({ year, month, day }, N) {
      let totalMonths = (year - 1) * 12 + (month - 1);

      totalMonths += N;

      let newYear = Math.floor(totalMonths / 12);
      return newYear;
   }

   document.write(getYear(userDate, 1000));
}