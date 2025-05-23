'use strict'

//Умова: Дано Shop -- клас, що містить список товарів (масив об’єктів класу Product (назва, ціна, кількість одиниць). Додати можливість ітератора до класу Shop, щоб при ітеруванні для кожного елемента виводився рядок «товар-загальна вартість».

class Product {
   constructor(name, price, quantity) {
      this.name = name
      this.price = price
      this.quantity = quantity
   }
}


class Shop {
   constructor(products = []) {
      this.products = products
   }

   *[Symbol.iterator]() {
      for (const product of this.products) {
         yield `${product.name}-${product.price * product.quantity}`
      }
   }
}

const shop = new Shop([
   new Product(`Cherries`, 7, 20),
   new Product(`Mango`, 10, 25),
   new Product(`Peach`, 5, 30)
])

for (const item of shop) {
   console.log(item)
}