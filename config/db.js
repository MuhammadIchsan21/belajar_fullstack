const mongoose = require("mongoose");
const config = require("config");
const db = config.get("mongoURI");

//Connect Db
const connectDB = async () => {
  try {
    await mongoose.connect(db, { useNewUrlParser: true });
    console.log("MongoDB connected");
  } catch (err) {
    console.error(err.message);

    //exit procces with failure
    procces.exit(1);
  }
};
//export modules

module.exports = connectDB;
