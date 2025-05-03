"use strict"

//Умова: Дано 5 елементів input. При введенні значення у якийсь із них необхідно автоматично заповнювати інші (усі попередні у спадному порядку(кожен попередній має значення на 1 менше за наступний), усі наступні на 1 більше (кожен наступне на 1 більше за попереднього).

const inputs = Array.from(document.querySelectorAll('.value-input'));

inputs.forEach((input, idx) => {
   input.addEventListener('input', () => {
      const base = parseInt(input.value, 10);
      if (isNaN(base)) return;

      inputs.forEach((el, i) => {
         el.value = base + (i - idx)
      })
   })
})