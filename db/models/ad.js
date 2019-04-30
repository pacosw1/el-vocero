var mongoose = require("mongoose");
var users = require("./user");
var type = mongoose.Schema.Types;

var adSchema = new mongoose.Schema({
  user: {
    _id: type.ObjectId,
    email: type.String,
    username: type.String,
    phoneNumber: type.String,
    location: type.String
  },
  title: {
    type: type.String,
    required: "A title is required"
  },
  description: {
    type: type.String,
    required: "A description is required"
  },
  price: {
    type: type.Number,
    required: "A price is required"
  },
  active: {
    type: type.Boolean,
    required: "Must Include active "
  }
});

var Ad = mongoose.model("Ad", adSchema);

module.exports = Ad;
