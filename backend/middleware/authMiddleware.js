const jwt = require("jsonwebtoken");
const asycHandler = require("express-async-handler");
const User = require("../model/User");

const authMiddleware = asycHandler(async (req, res, next) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];
      const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);

      const user = await User.findById(decoded.id);
      req.user = user;
      next();
    } catch (error) {
      res.status(401);
      throw new Error("Not Authorised, invalid token");
    }
  }
});

module.exports = authMiddleware;
