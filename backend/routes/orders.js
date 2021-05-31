const express = require("express");
const router = express.Router();
const order = require("../model/order");
const CheckAuth = require("../middleware/jwt-helper");

let getOrdersCounter = 0;

router.get("", (req, res, next) => {
  console.log(getOrdersCounter +"---Getting orders from mongoDb---");

  order.find().then((documents) => {
    res.json(
      {
        messages: "Orders retrieved successfully",
        orders: documents,
      }
    );
  });
});

router.post("", CheckAuth, (req, res, next) => {
  console.log("Post from you:\n" + req.body);

  const oneOrder = new order({
    username: req.body.username,
    email: req.body.email,
    orderDec: req.body.orderDec,
  });

  oneOrder.save();

  res.status(201).json({
    message: "Order Successfully created",
  });
});

//Check if user has valid token using middle ware we created.

//this is for checking auth            // router.delete( "/:id",CheckAuth, (req, res, next) => {
router.delete( "/:id", CheckAuth, (req, res, next) => {
    console.log("Here is the id:" +req.params.id);

    order.deleteOne({ _id: req.params.id }).then((result) => {
      //console.log(result);
      console.log("Order Deleted from DB");
      res.status(200).json({ message: "Order Deleted from Database" });
    });
  }
);

module.exports = router;
