const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const User = require("../model/user");
// const jwt = require("jsonwebtoken");
// const ExpressBrute = require("express-brute");
//const store = new ExpressBrute.MemoryStore();
// const bruteforce = new ExpressBrute(store);

router.post("/signup", (req, res, next) => {
  bcrypt.hash(req.body.password, 10).then((hash) => {
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      role: req.body.role,
      password: hash,
    });

    console.log(
      "From request:" + req.body.password,
      req.body.email,
      req.body.username
    );
    console.log("From being saved:" + newUser);

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

router.post("/login", bruteforce.prevent, (req, res, next) => {
  // creating global user variable to use in different code blocks.
  let fetchedUser;
  //checks if we have user with a valid e-mail address
  User.findOne({ email: req.body.email })
    .then((user) => {
      console.log(user);
      if (!user) {
        return res.status(401).json({
          message: "Authentication Failed, try again ",
        });
      }
      // assigning retrieved user to global variable so we can use him later
      fetchedUser = user;
      //compares hashed passwords (alwasy the same hash with same input)
      return bcrypt.compare(req.body.password, user.password); // compare returned user password and password in db
    })
    .then((result) => {
      console.log("2", result);
      if (!result) {
        return res.status(401).json({
          message: "Authentication Failure ",
        });
      }
      //create JWT if user exists : JWT contains user e mail and user ID from user object
      const token = jwt.sign(
        { email: fetchedUser.email, userId: fetchedUser._id },
        "secret_this_should_be_longer_time_is",
        {
          expiresIn: "1h",
        }
      );
      console.log(token);
      res.status(200).json({
        token: token,
      });
    })
    .catch((err) => {
      console.log(err);
      return res.status(401).json({
        message: "Authentication Failure",
      });
    });
});

module.exports = router;
