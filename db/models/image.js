var mongoose = require("mongoose");
//var categories = require("./category");
var type = mongoose.Schema.Types;

var imageSchema = new mongoose.Schema({
  total: {
    type: type.Number
  },
  items: []
});

var Image = mongoose.model("Image", imageSchema);

module.exports = Image;
