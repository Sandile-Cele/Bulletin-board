const express = require('express');

const app = express();

app.use((req, res, next) => {
  res.send(
    "I'm the first middle ware, if I use next I will call the second, if not nada will happen"
  );
  next();
});

app.use((req, res, next) => {
  console.log(
    "This response is being sent by middle ware called by" +
      "the previous middle ware using next"
  );
});

module.exports = app;
