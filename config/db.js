const mongoose = require("mongoose");

const connectDB = async () => {
  return mongoose
    .connect(process.env.DATABASE)
    .then(() => console.log("DB connected"))
    .catch((err) => console.log(err));
};

module.exports = connectDB;
