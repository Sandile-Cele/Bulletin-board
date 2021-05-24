console.log('server has started');
const express = require("express");
<<<<<<< HEAD
// const bodyParser = require("body-parser"); //This deprecated
=======
const bodyParser = require('body-parser');

>>>>>>> parent of 76c24ad (accept user input through post)
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

app.use((req, res, next) =>
{
  res.setHeader("Access-Control-Allow-Origin", '*');
  res.setHeader("Access-Control-Allow-Headers", "Origin,X-Requested-With,Content-Type,Accept,Authorization");
  res.setHeader("Access-Control-Allow-Methods", "*");
  next();
});

<<<<<<< HEAD
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
=======
app.use('/api/orders', (req, res, next) => {
>>>>>>> parent of 76c24ad (accept user input through post)

  const orders = req.body;
  // console.log(orders);
  res.status(201).json({
    messages: 'order successfully created!'
  });
<<<<<<< HEAD
});

app.use((req, res, next) => {
  console.log(
    "Backend done!"
  );
});
=======
>>>>>>> parent of 76c24ad (accept user input through post)

  // orders = [
    //   {
      //     id: '1',
      //     userName: 'sandileCele',
      //     email: 'sandile@email.com',
      //     orderDec: 'Cheese cake from server'
      //   },
      //   {
        //     id: '2',
        //     userName: 'Molly jones',
        //     email: 'Mollyjones@email.com',
        //     orderDec: 'Lemon pie cake from server'
        //   }
        // ]
        //  res.json({ messages: 'Orders retrieved from server successfully', orders: orders });

      });

      app.use((req, res, next) => {
        console.log(
          "This response is being sent by middle ware called by \nthe previous middle ware using next"

        );
      });

      // app.use("/api/orders", orderRoutes)
      // app.use("/api/user", userRoutes)
      module.exports = app
