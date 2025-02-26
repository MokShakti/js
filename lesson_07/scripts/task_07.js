"use strict"

if (confirm(`Shall we start the test?`)) {
   function displayRandomImage() {
      let randomNum = Math.floor(Math.random() * 4) + 1;
      let imgPath = ``;

      switch (randomNum) {
         case 1:
            imgPath = `https://fwcdn.pl/nph/1985708/2023/47925_1.14.jpg`;
            break;
         case 2:
            imgPath = `https://www.syfy.com/sites/syfy/files/styles/hero_image__large__computer__alt_1_5x/public/2025/01/screenshot_2025-01-06_at_9.28.07_am.jpg`;
            break;
         case 3:
            imgPath = `https://static1.srcdn.com/wordpress/wp-content/uploads/2024/09/fiona-in-ogre-form-looking-surprised-in-shrek-forever-after.jpg?q=70&fit=crop&w=1140&h=&dpr=1`;
            break;
         case 4:
            imgPath = `https://static1.srcdn.com/wordpress/wp-content/uploads/2020/07/Shrek-Family.jpg?q=50&fit=crop&w=825&dpr=1.5`;
            break;
      }

      document.write(`<img src="${imgPath}" alt="Random Image" style=100%>`);
   }
   displayRandomImage();
}