const express = require("express");

const app = express();

app.use((req, res, next) =>
{
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "Origin, X-Requested-With, Content-Type, Accept");
  res.setHeader("Access-Control-Allow-Headers", "GET", "POST", "OPTIONS", "PATCH", "DELETE");
  next();
});

app.use('/api/orders', (req, res, next) => {

  const orders = [
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

  });

  app.use((req, res, next) => {
    console.log(
      "This response is being sent by middle ware called by \nthe previous middle ware using next"

    );
  });

  module.exports = app
