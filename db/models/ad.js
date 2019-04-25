var mongoose = require("mongoose");
//var categories = require("./category");
var type = mongoose.Schema.Types;

var adSchema = new mongoose.Schema({
  userId: {
    type: type.String,
    required: "a model is required"
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
  imagePath: {
    type: type.String,
    required: "An preview image path `imagePath` is required"
  },
  active: {
    type: type.Boolean,
    required: "Must Include active "
  },
  status: {
    type: type.String,
    required: "Must include status"
  }
});

var Ad = mongoose.model("Ad", adSchema);

module.exports = Ad;
