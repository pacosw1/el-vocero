var mongoose = require("mongoose");
//var categories = require("./category");
var type = mongoose.Schema.Types;

var messageSchema = new mongoose.Schema({
  senderId: {
    type: type.ObjectId,
    required: "sender required"
  },
  receiverId: {
    type: type.ObjectId,
    required: "receiver required"
  },
  text: {
    type: type.String,
    required: "A text message is required"
  },
  timeStamp: {
    type: type.Date,
    default: Date.now()
  }
});

var Message = mongoose.model("Message", messageSchema);

module.exports = Message;
