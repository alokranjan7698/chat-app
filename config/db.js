const mongoose = require("mongoose");
const connectDB = async () => {
  try {
    // const conn = mongoose.connect(process.env.MONGO_URI);
    const conn = mongoose.connect(process.env.MONGO_URI);

    console.log(`MongoDB Connected: ${conn}`);
  } catch (err) {
    console.log(`error is ${err.message}`);
  }
};

module.exports = connectDB;
