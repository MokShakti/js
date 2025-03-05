'use strict'

if (confirm(`Shall we start the test?`)) {
   function filterPlatesByLetter(plates, letter = `A`) {
      let filteredPlates = [];
      for (let plate of plates) {
         if (plate[0] === letter) {
            filteredPlates.push(plate);
         }
      }
      return filteredPlates;
   }

   let plates = [`AA1234BB`, `BC5678CC`, `AK9876DD`, `AM5432EE`, `CA4321FF`];
   let filteredPlates = filterPlatesByLetter(plates);

   document.write(filteredPlates);
}