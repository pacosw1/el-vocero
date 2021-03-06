var mongoose = require("mongoose");
//var categories = require("./category");
var type = mongoose.Schema.Types;

var messageSchema = new mongoose.Schema({
  sender: {
    _id: type.ObjectId,
    username: type.String
  },
  receiverId: {
    type: type.ObjectId,
    required: "receiver required"
  },
  text: {
    type: type.String,
    required: "A text message is required"
  },
  adId: {
    type: type.ObjectId,
    required: "true"
  },
  timeStamp: {
    type: type.Date,
    default: Date.now()
  }
});

var Message = mongoose.model("Message", messageSchema);

module.exports = Message;
