"use strict"

const weekDay = parseInt(prompt(`Enter week's day from 1 to 7`));

switch (weekDay) {
   case 1:
      alert(`Monday`);
      break;
   case 2:
      alert(`Tuesday`);
      break;
   case 3:
      alert(`Wednesday`);
      break;
   case 4:
      alert(`Thursday`);
      break;
   case 5:
      alert(`Friday`);
      break;
   case 6:
      alert(`Saturday`);
      break;
   case 7:
      alert(`Sunday`);
      break;
   default:
      alert(`Incorrect week's day!`);
}