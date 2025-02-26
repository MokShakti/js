'use strict'

if (confirm(`Shall we start the test?`)) {
   function displayBanner(image, title, link) {
      document.write(`
        <div>
            <h2>${title}</h2>
            <a href="${link}" target="_blank">
                <img src="${image}" alt="Banner Image">
            </a>
        </div>
    `);
   }

   displayBanner(`https://i.redd.it/xd7aeok31ht71.png`, `Java Script Tutorial`, `https://www.w3schools.com/js/`);
}