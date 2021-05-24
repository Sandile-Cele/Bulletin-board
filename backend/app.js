console.log("server has started");
const express = require("express");
<<<<<<< HEAD
// const bodyParser = require("body-parser"); //This deprecated
const app = express();
const order = require("./model/order");
const mongoose = require("mongoose");
const fs = require("fs");

const cert = fs.readFileSync("Keys/certificate.pem");
const options = {
  server: {sslCA: cert}
};

app.use(express.json()); //Because app.use(bodyParser.json());...
app.use(express.urlencoded());//...is deprecated
=======
const bodyParser = require("body-parser");
const Order = require("./model/order");

const app = express();

app.use(bodyParser.json());
>>>>>>> parent of 31d5d90 (connected to mongoDb)

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin,X-Requested-With,Content-Type,Accept,Authorization"
  );
  res.setHeader("Access-Control-Allow-Methods", "*");
  next();
});

app.get("/api/orders", (req, res, next) =>
{
  order.find().then((documents)=>
  {
    res.json(
      {
      messages: "Orders retrieved successfully",
      orders:documents
    });
  });
});

app.use("/api/orders", (req, res, next) => {
  //const orders = req.body; //has been removed!
  const orders = new Order({
    username: req.body.username,
    email: req.body.email,
    orderDec: req.body.orderDec,
  });

  orders.save();

  console.log("order created:" + orders);

  res.status(201).json({
    messages: "Post successfully created!",
  });
});

app.use((req, res, next) => {
  console.log(
<<<<<<< HEAD
    "Backend done!"
=======
    "This response is being sent by middle ware called by \nthe previous middle ware using next"
>>>>>>> parent of 31d5d90 (connected to mongoDb)
  );
});

// app.use("/api/orders", orderRoutes)
// app.use("/api/user", userRoutes)
module.exports = app;

//This is code post orders from server to app
/*
  orders = [
    {
      id: '1',
      userName: 'sandileCele',
      email: 'sandile@email.com',
      orderDec: 'Cheese cake from server'
    },
    {
      id: '2',
      userName: 'Molly jones',
      email: 'Mollyjones@email.com',
      orderDec: 'Lemon pie cake from server'
    }
  ]
   res.json({ messages: 'Orders retrieved from server successfully', orders: orders });
*/
