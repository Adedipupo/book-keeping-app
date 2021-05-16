const mongoose = require('mongoose');


const dbConnect = () => {
  //connect to mongoose
  mongoose
    .connect(
      process.env.DB_URL,
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