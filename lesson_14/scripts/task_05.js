'use strict'

//Умова: Знайти: Знайти рік, коли прибуток був найбільшим.

if (confirm(`Shall we start the test?`)) {
   const websites = [
      {
         companyName: `WebDev Corp`,
         owner: `Ivan Petrov`,
         sponsors: [
            { lastName: `Sidorenko`, firstName: `Oleg`, investment: 5000 },
            { lastName: `Kovalenko`, firstName: `Marina`, investment: 3000 }
         ],
         releaseYear: 2020,
         cost: 15000
      },
      {
         companyName: `Tech Innovations`,
         owner: `Anna Smirnova`,
         sponsors: [
            { lastName: `Honchar`, firstName: `Pavlo`, investment: 7000 }
         ],
         releaseYear: 2021,
         cost: 22000
      },
      {
         companyName: `NextGen Web`,
         owner: `Oleksandr Kravchenko`,
         sponsors: [
            { lastName: `Danyliuk`, firstName: `Olha`, investment: 10000 },
            { lastName: `Bondar`, firstName: `Ihor`, investment: 5000 }
         ],
         releaseYear: 2022,
         cost: 18000
      }
   ];

   const mostProfitableYear = websites.reduce((maxYear, site) =>
      site.cost > (websites.find(s => s.releaseYear === maxYear)?.cost || 0) ? site.releaseYear : maxYear, 0);
   document.write(`Year with the highest profit:`, mostProfitableYear);
}