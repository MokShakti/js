"use strict"

if (confirm(`Shall we start the test?`)) {
   function cmToInches(cm) {
      return cm / 2.54;
   }

   function kgToPounds(kg) {
      return kg * 2.20462;
   }

   function kmToMiles(km) {
      return km * 0.621371;
   }

   let cm = parseFloat(prompt("Enter length in cm:"));
   let kg = parseFloat(prompt("Enter weight in kg:"));
   let km = parseFloat(prompt("Enter distance in km:"));

   document.write(`<p>${cm} cm is ${cmToInches(cm).toFixed(2)} inches</p>`);
   document.write(`<p>${kg} kg is ${kgToPounds(kg).toFixed(2)} pounds</p>`);
   document.write(`<p>${km} km is ${kmToMiles(km).toFixed(2)} miles</p>`);
}