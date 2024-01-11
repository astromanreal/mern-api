const mongoose = require("mongoose");

const ConnectDB = () => {
  try {
    mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log("DB connected!");
  } catch (error) {
    console.log("ERROR in Database");
  }
};

module.exports = ConnectDB;
