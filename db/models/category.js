var mongoose = require("mongoose");
//var categories = require("./category");
var type = mongoose.Schema.Types;

var categorySchema = new mongoose.Schema({
  name: {
    type: type.String,
    required: "name is required"
  }
});

var Category = mongoose.model("Category", categorySchema);

module.exports = Category;
