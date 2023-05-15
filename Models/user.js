const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  userToken: { type: String, default: "" },
  dateOfJoin: {
    type: Date,
    default: Date.now,
  },
});


//We use this for exporting a function
module.exports = mongoose.model("User", userSchema);