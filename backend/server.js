const express = require("express");
const dotenv = require("dotenv");
const error = require("./middleware/errorMiddlewareHandler");
const userRoute = require("./routes/usersRoutes");
const bookRouter = require("./routes/bookRoutes");


dotenv.config()

require("./config/dbConnect")();

const app = express();

const port = process.env.PORT || 5056;

app.use(express.json());

app.use('/api/users', userRoute)
app.use('/api/books', bookRouter)
app.use(error.errorMiddlewareHandler)

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
