'use strict'

if (confirm(`Shall we start the test?`)) {
   let m = parseFloat(prompt(`Enter the length of fabric in meters:`));
   let totalFabricUsed = 0;

   while (m > 0) {
      let pieceLength = parseFloat(prompt(`Enter the length of fabric to cut:`));

      if (pieceLength > m) {
         document.write(`Not enough fabric left for this piece!<br>`);
         break;
      }

      m -= pieceLength;
      totalFabricUsed += pieceLength;
      document.write(`Fabric used: ` + totalFabricUsed + ` meters. Fabric left: ` + m + ` meters.<br>`);
   }

   if (m === 0) {
      document.write(`The fabric is finished!`);
   }
}