const mongoose = require("mongoose");
// user Schema
const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      require: true,
      min: 1,
      max: 30,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      max: 100,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      min: 8,
    },
    followers: {
      type: Array,
      default: [],
    },
    followings: {
      type: Array,
      default: [],
    },
  
 
  });

module.exports = mongoose.model("User", UserSchema);