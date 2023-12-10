const mongoose = require("mongoose");

const { Schema } = mongoose;

const productSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  price: {
    type: Number,
    required: true,
    min: 0.0, // Enforces a positive value
  },
  stock: {
    type: Number,
    required: true,
    min: 0, // Enforces a non-negative integer
  },
  category: {
    type: String,
    required: true,
  },
  imageURL: {
    type: String,
    required: false,
  },
});
const Product = mongoose.model("products", productSchema);
module.exports = Product;
