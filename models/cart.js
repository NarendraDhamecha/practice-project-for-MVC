const fs = require("fs");

const path = require('path');

const p = path.join(
  path.dirname(process.mainModule.filename),
  'data',
  'cart.json'
);

module.exports = class Cart {
    static saveCartData(id, productPrice){

       fs.readFile(p, (error, data) => {
         let cart =  {products: [], totalPrice: 0};
         if(!error){
            cart = JSON.parse(data);
         }
         const existingProductIndex = cart.products.findIndex(p => p.id == id);
         const existingProduct = cart.products[existingProductIndex];
         let updatedProduct;

         if(existingProduct){
           updatedProduct = {...existingProduct};
           updatedProduct.qty += 1;
           cart.products = [...cart.products];
           cart.products[existingProductIndex] = updatedProduct;
         }else{
            updatedProduct = {id: id, qty: 1};
            cart.products = [...cart.products, updatedProduct];
         }
         cart.totalPrice += +productPrice;
         fs.writeFile(p, JSON.stringify(cart), (error) => {
            console.log(error)
         })
       })
    }
}