'use strict'

//Умова: Дано інформацію про відвідувачів деякого сайту (для кожного відвідувача зберігається логін). Підрахувати для кожного клієнта кількість відвідувань.

const visits = [
   `alice`,
   `bob`,
   `alice`,
   `carol`,
   `bob`,
   `alice`
];

const counts = {}
visits.forEach(login => {
   counts[login] = (counts[login] || 0) + 1
})

console.log(counts)