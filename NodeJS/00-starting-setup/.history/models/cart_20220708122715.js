const fs = require("fs");
const path = require("path");

const p = path.join(
  path.dirname(process.mainModule.filename),
  "data",
  "products.json"
);

module.exports = class Cart {
  static addProduct(id) {
    // fetch the previous cart
    // analyze the cart => Find existing product
    // add  new product / increase quantity
  }
};
