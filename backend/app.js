let restartCounter = 0;
console.log("server has started");
const express = require("express");
const app = express();// const bodyParser = require("body-parser"); //This deprecated
const order = require("./model/order");
const mongoose = require("mongoose");
const fs = require("fs");

const cert = fs.readFileSync("Keys/certificate.pem");
const options = {
  server: {sslCA: cert}
};

mongoose
  .connect("mongodb+srv://user_01:r8UCZ8wwHH6ZtJx@cluster0.bunvx.mongodb.net/orders?retryWrites=true&w=majority",  {useNewUrlParser: true, useUnifiedTopology: true})
  .then(() => {
    console.log("successsfully connected to MongoDb YAY!");
  })
  .catch(() => {
    console.log("Could not connect to DB!");
  }),
  options;


app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "*");
  res.setHeader("Access-Control-Allow-Headers", "Origin,X-Requested-With,Content-Type,Accept,Authorization");
  next();
});

app.use(express.json()); //Because app.use(bodyParser.json());...
app.use(express.urlencoded({extended: false}));//...is deprecated// You can set extended to TRUE you have a BIG object

app.get("/api/orders", (req, res, next) =>
{
  console.log("---Running get---");
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

app.post('/api/orders',(req,res,next)=>
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

app.delete('/api/orders', (req, res, next) => {
    console.log(req.body);

    Order.deleteOne({ _id: req.params.id })
    .then((result) => {
      console.log(result);
      console.log("Order Deleted from DB");

      res.status(200)
      .json({ message: "Order Deleted from Database" });
    });
  }
);

++restartCounter;
console.log(restartCounter+"---Backend done!---");

module.exports = app;
