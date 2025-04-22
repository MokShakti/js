'use strict'

//Умова: Наперед задано у скрипті масив зі списком бажань. Після завантаження сторінки випадковим чином вибираються 3 і відображаються у окремих div (їх треба створити і додати на сторінку).

if (confirm("Shall we start the test?")) {
   class Product {
      constructor(name, unit, quantity, manufacturerName, manufacturerRegNum) {
         this.name = name
         this.unit = unit
         this.quantity = quantity
         this.manufacturer = {
            name: manufacturerName,
            regNumber: manufacturerRegNum
         }
      }
   }

   class Warehouse {
      constructor() {
         this.products = []
      }

      registerProduct(product) {
         this.products.push(product)
         document.write(`<p>Product "${product.name}" added (${product.quantity} ${product.unit})</p>`)
      }

      dispatchProduct(productName, amount) {
         const product = this.products.find(p => p.name === productName)
         if (!product) {
            document.write(`<p>Product "${productName}" not found.</p>`)
            return
         }

         if (product.quantity < amount) {
            document.write(`<p>Not enough "${productName}" in stock.</p>`)
            return
         }

         product.quantity -= amount
         document.write(`<p>Dispatched ${amount} ${product.unit} of "${productName}". Remaining: ${product.quantity}</p>`)
      }

      filterByProductName(name) {
         const result = this.products.filter(p => p.name.toLowerCase().includes(name.toLowerCase()))
         document.write(`<h3>Products with name containing "${name}":</h3>`)
         result.forEach(p => {
            document.write(`<p>${p.name} (${p.quantity} ${p.unit}) - ${p.manufacturer.name}</p>`)
         });
      }

      filterByManufacturerName(manName) {
         const result = this.products.filter(p => p.manufacturer.name.toLowerCase().includes(manName.toLowerCase()))
         document.write(`<h3>Products by "${manName}":</h3>`)
         result.forEach(p => {
            document.write(`<p>${p.name} (${p.quantity} ${p.unit}) - Reg#: ${p.manufacturer.regNumber}</p>`)
         })
      }
   }

   const warehouse = new Warehouse()

   warehouse.registerProduct(new Product(`Flour`, `kg`, 100, `BestGrain Ltd`, `BG123`))
   warehouse.registerProduct(new Product(`Sugar`, `kg`, 50, `SweetCo`, `SW456`))
   warehouse.registerProduct(new Product(`Flour`, `kg`, 70, `LocalGrain`, `LG789`))

   warehouse.dispatchProduct(`Flour`, 30)
   warehouse.dispatchProduct(`Sugar`, 10)

   warehouse.filterByProductName(`Flour`)
   warehouse.filterByManufacturerName(`Sweet`)
}