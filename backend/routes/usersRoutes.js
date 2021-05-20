const express = require("express");
const asycHandler = require('express-async-handler');
const authMiddleware = require("../middleware/authMiddleware");
const User = require("../model/User");
const generateToken = require("../utils/generateToken");

const userRoute = express.Router();

userRoute.post("/register", asycHandler(async (req, res) => {
      
      const { name, email, password } = req.body;
      const userExist = await User.findOne({ email });
      if (userExist) {
        throw new Error("Email Exist");
      }
      const userCreated = await User.create({ name, email, password });
              res.status(200).json({
                _id: userCreated._id,
                name: userCreated.name,
                password: password,
                email: userCreated.email,
                token: generateToken(userCreated._id),
              });
}));

userRoute.post("/login", asycHandler(async(req, res) => {
    const {email, password } = req.body;
    const user = await User.findOne({ email})
    if (user && (await user.isPasswordMatch(password))) {
        res.status(200).json({
            _id: user._id,
            name: user.name,
            password: password,
            email: user.email,
            token: generateToken(user._id)
        })
    } else {
        res.status(401);
        throw new Error('Invalid Credentials')
    }
}));

userRoute.put("/:id",authMiddleware, asycHandler(async (req, res) => {
       const user = await User.findById(req.params.id);

       if (user) {
         const updatedUser = await User.findByIdAndUpdate(
           req.params.id,
           req.body,
           {
             new: true,
             runValidators: true,
           }
         );
         res.status(200).json({
           updatedUser,
         });
       } else {
         res.status(500);
         throw new Error("Update failed");
       }
}));
userRoute.delete("/:id", (req, res) => {
  res.send("Delete route");
});
userRoute.get("/",authMiddleware, asycHandler(async(req, res) => {
  const user = await User.find({});

  if (user) {
    res.status(200).json({
      user,
    });
  } else {
    res.status(500);
    throw new Error("There are no USer here");
  }
}));

module.exports = userRoute;
