"use strict"

//Умова: Знайти. Кількість сайтів, що було зроблено між 2000 та 2009 рр.

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

   const sitesBetween2000And2009 = websites.filter(site => site.releaseYear >= 2000 && site.releaseYear <= 2009).length;
   document.write(`Number of websites developed between 2000 and 2009:`, sitesBetween2000And2009);
}