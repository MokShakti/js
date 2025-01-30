"use strict"

const month = parseInt(prompt(`Enter month's number (1-12):`));

switch (month) {
   case 12:
   case 1:
   case 2:
      alert(`Winter`);
      break;
   case 3:
   case 4:
   case 5:
      alert(`Spring`);
      break;
   case 6:
   case 7:
   case 8:
      alert(`Summer`);
      break;
   case 9:
   case 10:
   case 11:
      alert(`Fall`);
      break;
   default:
      alert("Incorrect Month number");
}