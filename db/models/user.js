var mongoose = require("mongoose");
//var categories = require("./category");
var type = mongoose.Schema.Types;

var userSchema = new mongoose.Schema({
  email: {
    type: type.String,
    required: "An email is required"
  },
  username: {
    type: type.String,
    required: "A username is required"
  },

  password: {
    type: type.String,
    required: "A password is required"
  },
  location: {
    type: type.String
  },
  phoneNumber: {
    type: type.String,
    require: "A phone number is required"
  }
});

var User = mongoose.model("User", userSchema);

module.exports = User;
