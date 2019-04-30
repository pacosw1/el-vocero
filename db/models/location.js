var mongoose = require("mongoose");
//var categories = require("./category");
var type = mongoose.Schema.Types;

var locationSchema = new mongoose.Schema({
  city: {
    type: type.String,
    required: "city required"
  },
  state: {
    type: type.String,
    required: "state required"
  },
  country: {
    type: type.String,
    required: "A country message is required"
  }
});

var Location = mongoose.model("Location", locationSchema);

module.exports = Location;
