'use strict'

if (confirm(`Shall we start the test?`)) {
   let distance = 10;
   let totalDistance = 0;
   let day = 1;
   let totalDays = 7;

   while (day <= totalDays) {
      totalDistance += distance;

      if (distance > 20 && day === 1) {
         document.write(`On day ` + day + `, the athlete runs more than 20 km for the first time.<br>`);
      }

      if (totalDistance > 60 && day === 1) {
         document.write(`On day ` + day + `, the athlete's total distance exceeds 60 km for the first time.<br>`);
      }

      distance += distance * 0.10;
      day++;
   }

   document.write(`Total distance run after 7 days is: ` + totalDistance.toFixed(2) + ` km.`);
}