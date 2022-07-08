const fs = require("fs");
const path = require("path");

const p = path.join(
  path.dirname(process.mainModule.filename),
  "data",
  "cart.json"
);

module.exports = class Cart {
  static addProduct(id) {
    // fetch the previous cart
    fs.readFile(p, (err, fileContent) => {});
    // analyze the cart => Find existing product
    // add  new product / increase quantity
  }
};
