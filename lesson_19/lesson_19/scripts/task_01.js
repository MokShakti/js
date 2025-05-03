"use strict"

//Умова: Дано 10 рядків тексту «Hello!» у окремих div. При кліку на якийсь із них усі наступні повинні бути зафарбовані у червоний колір.

const items = document.querySelectorAll('div.hello')

items.forEach(div => {
   div.addEventListener('click', () => {

      let next = div.nextElementSibling;

      while (next && next.classList.contains('hello')) {
         next.style.color = 'red'
         next = next.nextElementSibling
      }
   })
})