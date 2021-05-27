const express = require("express");
const { Module } = require("node:module");
const router = express.Router();
const order = require("../model/order");

router.get("", (req, res, next) =>
{
  console.log("---Getting orders from mongoDb---");
  order.find().then((documents)=>
  {
    res.json(
//The problem to get orders, might be to change orders to 'O'rders
      {
      messages: "Orders retrieved successfully",
      orders:documents
    });
  });
});

router.post("",(req,res,next)=>
{
  console.log("Post from you:\n"+req.body);

  const oneOrder = new order(
    {
      username: req.body.username,
      email: req.body.email,
      orderDec: req.body.orderDec
    }
  );

  oneOrder.save();

  res.status(201).json({
    message:'Order Successfully created'
  });
});

router.delete('/api/orders/', (req, res, next) => {
    console.log(req.body);

    order.deleteOne({ _id: req.params.id })
    .then((result) => {
      console.log(result);
      console.log("Order Deleted from DB");

      res.status(200)
      .json({ message: "Order Deleted from Database" });
    });
  }
);

module.exports = router;
