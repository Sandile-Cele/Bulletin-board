const express = require("express");

const app = express();

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
    res.json({ messages: 'Orders retrieved from server successf ully', orders: orders });

  });


  //   res.send(
  //     "I'm the first middle ware, if I use next I will call the second, if not nada will happen"
  //   );
  //   next();
  // });

  app.use((req, res, next) => {
    console.log(
      "This response is being sent by middle ware called by \nthe previous middle ware using next"

    );
  });

  module.exports = app
