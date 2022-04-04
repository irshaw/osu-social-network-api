const mongod = require("mongod");
// user Schema
const UserSchema = new mongoose.Schema(
  { // user identifiers
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
  // following actions 
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