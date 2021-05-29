const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const user = require("../model/user");
const jwt = require("jsonwebtoken");
const ExpressBrute = require("express-brute");
const bruteforce = new ExpressBrute(store);

router.post("/signup", (req, res, next) => {
  bcrypt.hash(req.body.password, 10).then((hash) => {
    const user = new User({
      username: req.body.username,
      email: req.body.email,
      password: hash,
    });
    console.log(req.body.password, req.body.email, req.body.username);
    user
      .save()
      .then((result) => {
        res.status(201).json({
          message: "User created!",
          result: result,
        });
      })
      .catch((err) => {
        res.status(500).json({
          error: err,
        });
      });
  });
});
