let db = require("../db/db-connect");
let _ = require("lodash");
exports.getMessagesBetweenTwo = async (req, res) => {
  let { receiver, sender } = req.body;
  let messages = await db.Message.find({
    senderId: sender,
    receiverId: receiver
  });
  if (items.length < 1)
    res.status(404).send("No messages found between these users");
  else res.status(200).send(items);
};

exports.getMessages = async (req, res) => {
  let { userId } = req.params;
  let messages = await db.Message.find({ receiverId: userId });
  let list = messages.map(async message => {
    let from = await db.User.findById({ _id: message.senderId });
    let obj = {
      from: from.data,
      text: message.text
    };
    return obj;
  });
  res.send(list);
};
exports.sendMessage = async (req, res) => {
  let { senderId } = req.body;
  let sender = await db.User.findById({ _id: senderId });
  let message = _.pick(req.body, ["timeStamp", "text", "receiverId", "adId"]);
  message.sender = sender;

  let newMessage = new db.Message(message);
  await newMessage.save();
  res.send({ message: "Message sent sucessfully", text: newMessage });
};

// exports.editAd = async (req, res) => {
//   await db.Ad.find({ _id: req.params._id }, (err, result) => {
//     if (result.length < 1) res.status(404).send("does not exist ");
//   });
//   await db.Ad.findByIdAndUpdate({ _id: req.params._id }, req.body);
//   res.status(200).send(`Item with id: ${req.params._id} updated successfully`);
// };
