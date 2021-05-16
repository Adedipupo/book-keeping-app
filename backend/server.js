const express = require("express");
const mongoose = require("mongoose");
const error = require("./middleware/errorMiddlewareHandler");



const userRoute = require("./routes/usersRoutes");
require("./config/dbConnect")();

const app = express();

const port = process.env.PORT || 5056;

app.use(express.json());

app.use('/api/users',userRoute)
app.use(error.errorMiddlewareHandler)

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
