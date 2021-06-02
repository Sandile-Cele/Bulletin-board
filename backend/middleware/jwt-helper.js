//jwt token creation
const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    jwt.verify(token, "my_super_secret");
    console.log("token Verified successfully");
    next();
  } catch (error) {
    res.status(401).json({
      message: "middle ware Auth Failed- no valid token set",
    });
  }
};
