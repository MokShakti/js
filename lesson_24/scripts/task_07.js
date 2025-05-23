'use strict'

//Умова: Дано масив студентів (піб, курс, факультет). Підрахувати кількість різних факультетів, та кількість студентів кожного з курсів.

const students = [
   {
      name: `John A. Smith`,
      course: 1, faculty: `Computer Science`
   },
   {
      name: `Emily B. Johnson`,
      course: 2, faculty: `Mathematics`
   },
   {
      name: `Michael C. Brown`,
      course: 1, faculty: `Computer Science`
   },
   {
      name: `Sarah D. Davis`,
      course: 3, faculty: `Physics`
   },
   {
      name: `David E. Wilson`,
      course: 2, faculty: `Mathematics`
   },
   {
      name: `Linda F. Taylor`,
      course: 1, faculty: `Physics`
   },
]

const facultiesCount = new Set(students.map(s => s.faculty)).size

const courseCounts = {}
students.forEach(s => {
   courseCounts[s.course] = (courseCounts[s.course] || 0) + 1
})

console.log(`Distinct faculties:`, facultiesCount)
console.log(`Students per course:`, courseCounts)