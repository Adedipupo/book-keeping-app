const express = require("express");
const mongoose = require("mongoose");
require("./config/dbConnect")();

const app = express();


const port = process.env.PORT || 5056;

app.use(express.json());

app.post("/api/users/register", (req, res) => {
  res.send("Register route");
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
