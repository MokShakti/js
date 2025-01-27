"use strict"

//Дані

const a = 20
const b = 14
const c = 12

//Обчислення

const s1 = a + 12 + b;
const s2 = Math.sqrt((a + b) / (2 * a));
const s3 = Math.cbrt((a + b) * c);
const s4 = Math.sin(a / -b);

//Результат
document.write(`
   s1 = ${s1} <br>
   s2 = ${s2.toFixed(2)} <br>
      s3 = ${s3.toFixed(2)} <br>
         s4 = ${s4.toFixed(2)}
         `)
