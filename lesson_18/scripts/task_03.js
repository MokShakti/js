"use strict"

//Умова: Користувач задає рік народження. Визначити кількість років користувача.

function calculateAge() {
   const year = parseInt(document.getElementById('birthYear').value);
   const currentYear = new Date().getFullYear();
   const result = document.getElementById('result');
   if (isNaN(year) || year < 1900 || year > currentYear) {
      result.textContent = 'Please enter a valid year';
      return;
   }
   const age = currentYear - year;
   result.textContent = `You are approximately ${age} years old.`;
}
