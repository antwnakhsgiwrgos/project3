const chalk = require('chalk');
const products = require("./products.json");

//console.table(products);
//console.log(products.length);
let sum = 0;
let max = 0;
let min = products[0].price;


for (let p of products) {

    if (p.sales) {
        console.log(p.name + (":") + chalk.blue(p.sales) + "€");
    } else {
        console.log(p.name + (":") + p.price + "€");
    }

    sum = sum + p.price;

    if (p.price > max) {
        max = p.price;
    }
    if (p.price < min) {
        min = p.price;
    }
}
let avg = sum / products.length;

console.log("sum:" + sum);
console.log("avg:" + avg);
console.log("max:" + max);
console.log("min:" + min);
//




