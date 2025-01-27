"use strict"

//Дані
// const pricePer1Good
// const quantityOfGoods
// const totalVATprice
const pricePer1Good = parseFloat(prompt(`Enter price per one good`));
const quantityOfGoods = parseFloat(prompt(`Enter quantity of Goods`));
const VAT = 5

//Обчислення

const totalSum = pricePer1Good * quantityOfGoods;
const totalVATprice = totalSum * 5 / 100;

//Результати

document.write(`
   Total sum for Goods is ${totalSum}zl. Following that, VAT is ${totalVATprice.toFixed(2)}zl
   `)