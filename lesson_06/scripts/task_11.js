'use strict'

if (confirm(`Shall we start the test?`)) {
   for (let t = 0; t < 4; t++) {
      for (let b = 0; b < 4; b++) {
         for (let r = 0; r < 4; r++) {
            for (let l = 0; l < 4; l++) {
               let color1, color2, color3, color4;

               switch (t) {
                  case 0: color1 = `Red`; break;
                  case 1: color1 = `Green`; break;
                  case 2: color1 = `Blue`; break;
                  case 3: color1 = `Yellow`; break;
               }

               switch (b) {
                  case 0: color2 = `Red`; break;
                  case 1: color2 = `Green`; break;
                  case 2: color2 = `Blue`; break;
                  case 3: color2 = `Yellow`; break;
               }

               switch (r) {
                  case 0: color3 = `Red`; break;
                  case 1: color3 = `Green`; break;
                  case 2: color3 = `Blue`; break;
                  case 3: color3 = `Yellow`; break;
               }

               switch (l) {
                  case 0: color4 = `Red`; break;
                  case 1: color4 = `Green`; break;
                  case 2: color4 = `Blue`; break;
                  case 3: color4 = `Yellow`; break;
               }

               document.write(`Combination: ` + color1 + `, ` + color2 + `, ` + color3 + `, ` + color4 + `<br>`);
            }
         }
      }
   }
}