var mongoose = require("mongoose");
//var categories = require("./category");
var type = mongoose.Schema.Types;
jwt = require("jsonwebtoken");

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
userSchema.methods.generateToken = function() {
  console.log(process.env.SALT);
  let token = jwt.sign(
    {
      _id: this._id,
      username: this.username,
      location: this.location,
      email: this.email,
      phoneNumber: this.phoneNumber
    },
    process.env.SALT
  );
  return token;
  //res.header("token", token ).send(token);
};

var User = mongoose.model("User", userSchema);

module.exports = User;
