var mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  name: String,
  price: Number,
  description: String
});

const product = mongoose.model("product", productSchema);

module.exports = product;