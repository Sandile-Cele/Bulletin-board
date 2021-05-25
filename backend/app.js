console.log("server has started");
// const bodyParser = require("body-parser"); //This deprecated
const express = require("express");
const app = express();
const order = require("./model/order");
const mongoose = require("mongoose");
const fs = require("fs");

const cert = fs.readFileSync("Keys/certificate.pem");
const options = {
  server: {sslCA: cert}
};


app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "*");
  res.setHeader("Access-Control-Allow-Headers", "Origin,X-Requested-With,Content-Type,Accept,Authorization");
  next();
});

app.use(express.json()); //Because app.use(bodyParser.json());...
app.use(express.urlencoded({extended: false}));//...is deprecated

app.get("/api/orders", (req, res, next) =>
{
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

app.post("/api/orders", (req, res, next) => {
  const newOrder = new Order({
    username: req.body.username,
    email: req.body.email,
    orderDec: req.body.orderDec,
  });
  console.log("order created:" + req.body);

  newOrder.save();

  console.log("order created:" + newOrder);

  res.status(201).json({
    messages: "Post successfully created!",
  });
});

app.use((req, res, next) => {
  console.log(
    "Backend done!"
  );
});

module.exports = app;
