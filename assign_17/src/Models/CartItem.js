const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const cartItemSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },
  product: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "Product",
  },
  quantity: {
    type: Number,
    required: true,
    min: 1, // Ensure positive integer quantity
  },
});

const CartItem = mongoose.model("CartItem", cartItemSchema);

module.exports = CartItem;
