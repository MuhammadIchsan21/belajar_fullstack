const mongoose = require("mongoose");

UserSchema = new mongoose.Schema({
  nama: {
    type: string,
    require: true,
  },
  email: {
    type: string,
    require: true,
    unique: true,
  },
  password: {
    type: string,
    require: true,
  },
  avatar: {
    type: string,
  },
  date: {
    type: date,
    default: Date.now,
  },
});
module.exports = User.mongoose.model("user", UserSchema);
