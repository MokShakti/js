"use strict"

if (confirm(`Shall we start the test?`)) {
   let boxes = 15;

   while (boxes > 0) {
      let load = parseInt(prompt(`How many boxes to load into the truck? Current number of boxes in stock: ` + boxes));

      if (load > boxes) {
         alert(`You cannot load more boxes than available in stock. Please enter a smaller number.`);
      } else {
         boxes -= load;
         document.write(`Loaded ` + load + ` boxes. Remaining ` + boxes + ` boxes in stock.<br>`);
      }
   }

   document.write(`All boxes have been loaded.`);
}