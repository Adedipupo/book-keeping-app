const express = require("express");
const mongoose = require("mongoose");
const User = require("./model/User");
require("./config/dbConnect")();

const app = express();


const port = process.env.PORT || 5056;

app.use(express.json());

app.post("/api/users/register", async(req, res) => {
    try {
        const {name,email,password} = req.body;
        const user = await User.create({ name, email, password })
        console.log(user);
        res.send(user)
    } catch (error) {
        console.log(error);
    }
    
});
app.post("/api/users/login", (req, res) => {
  res.send("Login route");
});
app.put("/api/users/update", (req, res) => {
  res.send("Update route");
});
app.delete("/api/users/:id", (req, res) => {
  res.send("Delete route");
});
app.get("/api/users", (req, res) => {
  res.send("Fetch All route");
});

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
