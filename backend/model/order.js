const mongoose = require("mongoose");

const orderSchema = mongoose.Schema({
  email: { type: String, required: true },
  orderDec: { type: String, required: true },
});

module.exports = mongoose.model("Order", orderSchema);

mongoose
  .connect(
    "mongodb+srv://user_01:r8UCZ8wwHH6ZtJx@cluster0.bunvx.mongodb.net/orders?retryWrites=true&w=majority",  {useNewUrlParser: true, useUnifiedTopology: true}
  )
  .then(() => {
    console.log("connected to DB successsfully! YAY!");
  })
  .catch(() => {
    console.log("Could not connect to DB!");
  });
