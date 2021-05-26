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
app.use(express.urlencoded({extended: false}));//...is deprecated



app.get("/api/orders", (req, res, next) =>
{
  console.log("Getting orders...");
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
  const orders = new Order(
    {
      userName: req.body.userName,
      Email: req.body.Email,
      PlacedOder: req.body.PlacedOder
    }
  );
  orders.save();
  console.log(orders);
  res.status(201).json({
    message:'Order Successfully created'
  });
});

// app.post('/api/orders', (req, res)=>
// {
//   console.log("---POST method has been hit!---");
//   console.log(req.body);
//   console.log(req.body.username);
//   console.log(req.body.email);
//   console.log(req.body.orderDec);
//   const newOrder = new order(
//   {
//     username : req.body.username,
//     email : req.body.email,
//     orderDec : req.body.orderDec
//   });

//   newOrder.save().catch();
//   console.log("here is the saved order:"+newOrder);
//   res.status(201).json({
//     message: "Order successfully created!"
//   })
// });

app.use((req, res, next) => {
  console.log(
    "---Backend done!---"
  );
});

module.exports = app;
