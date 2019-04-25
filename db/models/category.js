var mongoose = require("mongoose");
//var categories = require("./category");
var type = mongoose.Schema.Types;

var cartSchema = new mongoose.Schema({
  total: {
    type: type.Number
  },
  items: []
});

var Cart = mongoose.model("Cart", cartSchema);

module.exports = Cart;
