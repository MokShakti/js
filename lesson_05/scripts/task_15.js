'use strict'

if (confirm(`Shall we start the test?`)) {
   let totalTemperature = 0;
   let months = 12;
   let count = 0;

   do {
      let temperature = parseFloat(prompt(`Enter the temperature for month ${count + 1}:`));

      if (isNaN(temperature)) {
         alert(`Please enter a valid temperature!`);
      } else {
         totalTemperature += temperature;
         count++;
      }
   } while (count < months);

   let averageTemperature = totalTemperature / months;

   alert(`The average temperature for the year is: ${averageTemperature.toFixed(2)}°C`);
}