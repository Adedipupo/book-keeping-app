const mongoose = require('mongoose');


const dbConnect = () => {
  //connect to mongoose
  mongoose
    .connect(
      "mongodb+srv://dipo123:12345@book-keeping-app.zmu4u.mongodb.net/book-keeping-app",
      {
        useFindAndModify: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useNewUrlParser: true,
      }
    )
    .then(() => console.log("DB connected"))
    .catch((error) => console.log());
}

module.exports = dbConnect;