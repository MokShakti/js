'use strict'

if (confirm(`Shall we start the test?`)) {
   let totalProfit = 0;
   let weeks = parseInt(prompt("Enter the number of weeks:"));
   let daysInWeek = 7;

   for (let i = 1; i <= weeks; i++) {
      let weeklyProfit = 0;

      for (let w = 1; w <= daysInWeek; w++) {
         let dailyProfit = parseFloat(prompt(`Enter the profit for day ${w} of week ${i}:`));

         if (isNaN(dailyProfit) || dailyProfit < 0) {
            alert("Please enter a valid profit!");
            j--;
         } else {
            weeklyProfit += dailyProfit;
         }
      }
      totalProfit += weeklyProfit;
      alert(`Profit for week ${i}: ${weeklyProfit.toFixed(2)} zl.`);
   }
   alert(`Total profit for ${weeks} weeks: ${totalProfit.toFixed(2)} zl.`);
}