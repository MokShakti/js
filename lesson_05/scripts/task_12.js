'use strict'

if (confirm(`Shall we start the test?`)) {
   if (confirm(`Shall we play?`)) {
      let prize = 0;
      let result1, result2, result3;

      let rand1 = Math.floor(Math.random() * 4);
      let rand2 = Math.floor(Math.random() * 4);
      let rand3 = Math.floor(Math.random() * 4);

      switch (rand1) {
         case 0:
            result1 = `🍒`;
            break;
         case 1:
            result1 = `🍋`;
            break;
         case 2:
            result1 = `🍊`;
            break;
         case 3:
            result1 = `🍉`;
            break;
      }

      switch (rand2) {
         case 0:
            result2 = `🍒`;
            break;
         case 1:
            result2 = `🍋`;
            break;
         case 2:
            result2 = `🍊`;
            break;
         case 3:
            result2 = `🍉`;
            break;
      }

      switch (rand3) {
         case 0:
            result3 = `🍒`;
            break;
         case 1:
            result3 = `🍋`;
            break;
         case 2:
            result3 = `🍊`;
            break;
         case 3:
            result3 = `🍉`;
            break;
      }

      document.write(`Results: ` + result1 + ` | ` + result2 + ` | ` + result3 + `<br>`);

      if (result1 === result2 && result2 === result3) {
         switch (result1) {
            case `🍒`:
               prize = 100;
               break;
            case `🍋`:
               prize = 200;
               break;
            case `🍊`:
               prize = 500;
               break;
            case `🍉`:
               prize = 1000;
               break;
         }
      }

      if (prize > 0) {
         document.write(`Congratulations! You won ${prize} zl!`);
      } else {
         document.write(`Better luck next time!`);
      }
   }
}