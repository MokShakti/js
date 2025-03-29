'use strict'

//Умова: Знайти: Створити 2 окремих списки з копіями об’єктів, що містять сайти з вартістю до 10000 і більше 10000.

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

   const lowCostWebsites = websites.filter(site => site.cost <= 10000);
   const highCostWebsites = websites.filter(site => site.cost > 10000);
   console.log(`Websites with cost up to 10000:`, lowCostWebsites);
   console.log(`Websites with cost above 10000:`, highCostWebsites);
}