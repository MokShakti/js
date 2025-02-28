"use strict"

if (confirm(`Shall we start the test?`)) {
   const visitorsPerDay = [];

   for (let i = 0; i < 7; i++) {
      let visitors = parseInt(prompt(`Enter the number of visitors for day ${i + 1}:`));
      while (isNaN(visitors) || visitors < 0) {
         visitors = parseInt(prompt(`Invalid input. Enter a valid number of visitors for day ${i + 1}:`));
      }
      visitorsPerDay.push(visitors);
   }

   function getDaysWithFewVisitors(visitors, threshold) {
      let days = [];
      for (let i = 0; i < visitors.length; i++) {
         if (visitors[i] < threshold) {
            days.push(i + 1);
         }
      }
      return days;
   }

   function getDaysWithMinVisitors(visitors) {
      let minVisitors = visitors[0];
      let days = [];
      for (let i = 1; i < visitors.length; i++) {
         if (visitors[i] < minVisitors) {
            minVisitors = visitors[i];
         }
      }
      for (let i = 0; i < visitors.length; i++) {
         if (visitors[i] === minVisitors) {
            days.push(i + 1);
         }
      }
      return days;
   }

   function getTotalVisitors(visitors) {
      let weekdayTotal = 0;
      let weekendTotal = 0;
      for (let i = 0; i < visitors.length; i++) {
         if (i < 5) {
            weekdayTotal += visitors[i];
         } else {
            weekendTotal += visitors[i];
         }
      }
      return [weekdayTotal, weekendTotal];
   }

   const fewVisitorsDays = getDaysWithFewVisitors(visitorsPerDay, 20);
   const minVisitorsDays = getDaysWithMinVisitors(visitorsPerDay);
   const totals = getTotalVisitors(visitorsPerDay);
   const weekdayTotal = totals[0];
   const weekendTotal = totals[1];

   document.write(`Days with fewer than 20 visitors: ${fewVisitorsDays.join(", ")}<br>`);
   document.write(`Days with the minimum visitors: ${minVisitorsDays.join(`, `)}<br>`);
   document.write(`Total visitors on weekdays: ${weekdayTotal}<br>`);
   document.write(`Total visitors on weekends: ${weekendTotal}<br>`);
}