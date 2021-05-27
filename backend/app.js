console.log("server has started");
const express = require("express");
const app = express();// const bodyParser = require("body-parser"); //This deprecated
const order = require("./model/order");
const mongoose = require("mongoose");
const fs = require("fs");

const orderRoutes = require("./routes/orders")

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



let restartCounter = 0;
++restartCounter;
console.log(restartCounter+"---Backend done!---");

app.use("/api/orders", orderRoutes);
// app.use("/api/user", userRoutes);

module.exports = app;
