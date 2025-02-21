'use strict'

if (confirm(`Shall we start the test?`)) {
   let m = parseInt(prompt(`Enter how many money Mikola has:`));
   let k = parseInt(prompt(`Enter the cost of one ice cream:`));
   let iceCreamsEaten = 0;

   while (m >= k) {
      m -= k;
      iceCreamsEaten++;
   }

   document.write(`Mikola can eat ` + iceCreamsEaten + ` ice creams.<br>`);
   document.write(`He will have ` + m + ` money left.`);
}