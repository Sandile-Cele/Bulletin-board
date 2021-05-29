const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const User = require("../model/user");
// const jwt = require("jsonwebtoken");
// const ExpressBrute = require("express-brute");
// const bruteforce = new ExpressBrute(store);

router.post("/signup", (req, res, next) => {
  bcrypt.hash(req.body.password, 10).then((hash) => {
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      role: req.body.role,
      password: hash,
    });

    console.log("From request:"+req.body.password, req.body.email, req.body.username);
    console.log("From being saved:"+newUser);

    newUser.save();

    res.status(201).json({
      message: "User Successfully created",
    });

    //Try and use this
    // newUser.save()
    //   .then((result) => {
    //     res.status(201).json({
    //       message: "User created!",
    //       result: result,
    //     });
    //   })
    //   .catch((err) => {
    //     res.status(500).json({
    //       error: err,
    //     });
    //   });
  });
});

module.exports= router;
