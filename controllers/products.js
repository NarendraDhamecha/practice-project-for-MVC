const Product = require("../models/product");

exports.getAddProduct = (req, res, next) => {
  res.render("add-product", {
    pageTitle: "Add Product",
    path: "/admin/add-product",
    formsCSS: true,
    productCSS: true,
    activeAddProduct: true,
  });
};

exports.postAddProduct = (req, res, next) => {
  const product = new Product(req.body.title);
  product.save()
  .then(() => res.redirect("/"))
  .catch(err => console.log(err));
};

exports.getProducts = (req, res, next) => {
  Product.fetchAll()
  .then(([row, fieldData]) => {
    res.render("shop", {
      prods: row,
      pageTitle: "Shop",
      path: "/",
      hasProducts: products.length > 0,
      activeShop: true,
      productCSS: true,
    });
  }).catch(err => console.log(err));
};
