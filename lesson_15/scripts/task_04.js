'use strict'

//Умова: Розробити клас Baner. Поля: Масив об’єктів(графічних зображень та посилань на сайти). Методи: Метод випадкового вибору об’єкта(графічного зображення та посилання). Метод виведення випадкового банера.

if (confirm(`Shall we start the test?`)) {
   class Baner {
      constructor() {
         this.banners = [
            { image: "https://cdn.prod.website-files.com/6657421f71dedfccb6c0511b/67885c32b72763927a765f39_66bea0ac80d68962945510ff_pubg-go20ghrcj4ybxhvq.jpeg", url: "https://www.vpnsuper.com/vpn-for/pubg" },
            { image: "https://assets-prd.ignimgs.com/2024/08/27/pubg-7th-anniversary-key-art-1724780016773.jpg?width=1920", url: "https://www.ign.com/articles/pubg-battlegrounds-director-discusses-the-importance-of-the-games-community" },
            { image: "https://executive-bulletin.com/wp-content/uploads/2019/07/Image-PUBG-MOBILE.jpeg", url: "https://executive-bulletin.com/technology/pubg-mobile-introduces-gameplay-management-system-in-10-additional-countries-across-middle-east" },
            { image: "https://images.ctfassets.net/vfkpgemp7ek3/113157066/8dc5a317740ebf5d9d7a0705f88a6326/pubg-mobile-revenue-march-2019.jpg?fm=webp&q=40&w=1920", url: "https://sensortower.com/blog/pubg-mobile-revenue-march-2019" },
         ]
      }

      getRandomBanner() {
         const randomIndex = Math.floor(Math.random() * this.banners.length)
         return this.banners[randomIndex]
      }

      renderBanner() {
         const banner = this.getRandomBanner()

         document.write(`
      <a href="${banner.url}" target="_blank">
        <img src="${banner.image}" width=100% alt="Random Banner">
      </a>
    `)
      }
   }

   const myBaner = new Baner()

   myBaner.renderBanner()
}