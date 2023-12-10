const mongoose = require("mongoose");

const {
  Schema,
  Types: { ObjectId },
} = mongoose;

const orderItemSchema = new Schema({
  product: {
    type: ObjectId,
    required: true,
    ref: "Product",
  },
  quantity: {
    type: Number,
    required: true,
    min: 1, // Enforces a positive integer
  },
});

const orderSchema = new Schema({
  user: {
    type: ObjectId,
    required: true,
    ref: "User",
  },
  items: {
    type: [orderItemSchema],
    required: true,
  },
  totalAmount: {
    type: Number,
    required: true,
    min: 0.0, // Enforces a positive value
  },
  shippingAddress: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
    default: "Pending",
  },
});

const Order = mongoose.model("orders", orderSchema);
module.exports = Order;
