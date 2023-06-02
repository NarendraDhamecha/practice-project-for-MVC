const fs = require('fs');
const path = require("path");
const rootDir = require("../util/path");

const p = path.join(rootDir, "data", "products.json");

const getProductsDataFromFile = (cb) => {
  fs.readFile(p, (error, data) => {
    if(error){
      cb([]);
    }else{
      cb(JSON.parse(data))
    }
  })
}

module.exports = class Products {
    constructor(title){
      this.title = title
    }

    save() {
       getProductsDataFromFile(products => {
        products.push(this);

        fs.writeFile(p, JSON.stringify(products), (err) => {
          console.log(err);
        })
       })
    }
    
    static fetchAll(cb) {
       getProductsDataFromFile(cb);
    }
}