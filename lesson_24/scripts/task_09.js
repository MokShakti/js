'use strict'

//Умова: Дано два списки прізвищ студентів, що відвідують гуртки з математики і історії. Підрахувати скільки студентів з гуртка з історії також відвідують гурток з математики. Також підрахувати скільки всього студентів відвідують хоча б один гурток.

const math = [`Smith`, `Johnson`, `Williams`, `Brown`];
const history = [`Williams`, `Jones`, `Johnson`, `Miller`]

const mathSet = new Set(math)
const historySet = new Set(history)

const intersection = new Set(
   [...historySet].filter(name => mathSet.has(name))
)

const union = new Set([...mathSet, ...historySet])

console.log(`Students in both math and history: ${intersection.size}`)

console.log(`Students in at least one club: ${union.size}`)