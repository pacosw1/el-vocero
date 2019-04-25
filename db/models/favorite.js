var mongoose = require("mongoose");
//var categories = require("./category");
var type = mongoose.Schema.Types;

var favoriteSchema = new mongoose.Schema({
  adId: {
    type: type.ObjectId,
    required: "AdId required"
  },
  userId: {
    type: type.ObjectId,
    required: "userId is required"
  }
});

var Favorite = mongoose.model("Favorite", favoriteSchema);

module.exports = Favorite;
