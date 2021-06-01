const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const User = require("../model/user");
const jwt = require("jsonwebtoken");
const ExpressBrute = require("express-brute");
const store = new ExpressBrute.MemoryStore();
const bruteforce = new ExpressBrute(store);

//Password is being hashed and salted
//JWT token is used
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
      message: "User Successfully created(FROM BACKEND)",
    });
  });
});

router.post("/login", bruteforce.prevent, (req, res, next) => {

  let fetchedUser;

  User.findOne({ email: req.body.email })
    .then((user) => {
      console.log("Getting user from Db:"+user);
      if (!user) {
        return res.status(401).json({
          message: "Authentication Failed, try again ",
        });
      }

      fetchedUser = user;

      return bcrypt.compare(req.body.password, user.password);
    })
    .then((result) => {
      console.log("2", result);
      if (!result) {
        return res.status(401).json({
          message: "Authentication Failure ",
        });
      }

      const token = jwt.sign(
        { email: fetchedUser.email, userId: fetchedUser._id, username: fetchedUser.username},
          "my_super_secret",
        {
          expiresIn: "1h",
        }
      );
      console.log("This is the token:\n"+token);
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
