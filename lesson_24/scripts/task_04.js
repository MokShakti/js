'use strict'

//Умова: Дано список URL адрес. Підрахувати кількість адрес, що відносяться до кожного із доменів (edu, com, org,...).

function countByTLD(urls) {
   const counts = {}
   const re = /\.([^.\/]+)(?=\/|$)/
   urls.forEach(url => {
      const m = url.match(re)
      if (m) {
         const tld = m[1].toLowerCase()
         counts[tld] = (counts[tld] || 0) + 1
      }
   })
   return counts
}

const urls = [
   `https://www.example.com/path`,
   `http://university.edu`,
   `https://sub.domain.org/page`,
   `https://another.edu/info`,
   `http://site.ORG/upper`,
   `https://demo.com`
]

console.log(countByTLD(urls))