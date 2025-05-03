'use strict'

//Умова: Відображаємо картки товарів, які користувач може вибирати. Вибраний товар має зелену рамку (при кліку робити toogle з класом вибраного елемента)

const container = document.getElementById('productsContainer')

container.addEventListener('click', (e) => {

   const card = e.target.closest('.product-card')
   if (!card) return

   card.classList.toggle('selected')
})