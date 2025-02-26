"use strict"

if (confirm(`Shall we start the test?`)) {
   function createTable(rows, cols, message) {
      let table = `<table>`;
      for (let i = 0; i < rows; i++) {
         table += "<tr>";
         for (let j = 0; j < cols; j++) {
            table += `<td>${message}</td>`;
         }
         table += `</tr>`;
      }
      table += `</table>`;
      document.write(table);
   }

   let rows = parseInt(prompt(`Enter number of rows:`));
   let cols = parseInt(prompt(`Enter number of columns:`));
   let message = prompt(`Enter cell message:`);

   createTable(rows, cols, message);
}