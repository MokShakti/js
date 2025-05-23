'use strict'

//Умова: Дано масив книг (назва, рік видання, автор, ціна). Підрахувати загальну вартість книг для кожного із авторів.

const books = [
   { title: `1984`, year: 1949, author: `George Orwell`, price: 15 },
   { title: `Animal Farm`, year: 1945, author: `George Orwell`, price: 10 },
   { title: `The Hobbit`, year: 1937, author: `J.R.R. Tolkien`, price: 20 },
   { title: `The Fellowship of the Ring`, year: 1954, author: `J.R.R. Tolkien`, price: 25 },
   { title: `Pride and Prejudice`, year: 1813, author: `Jane Austen`, price: 12 },
   { title: `Emma`, year: 1815, author: `Jane Austen`, price: 14 },
]

const totalByAuthor = books.reduce((acc, { author, price }) => {
   acc[author] = (acc[author] || 0) + price;
   return acc
}, {})

console.log(totalByAuthor)