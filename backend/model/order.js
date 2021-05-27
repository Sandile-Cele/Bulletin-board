const mongoose = require("mongoose");

const orderSchema = mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true },
  orderDec: { type: String, required: true },
});

module.exports = mongoose.model("Order", orderSchema);

