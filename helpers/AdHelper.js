let db = require("../db/db-connect");
let _ = require("lodash");
exports.getAds = async (req, res) => {
  let items = await db.Ad.find();
  if (items.length < 1) res.send([]);
  else res.status(200).send(items);
};

exports.getAd = async (req, res) => {
  let ad = await db.Ad.findById({ _id: req.params._id });
  let result = _.pick(ad, [
    "title",
    "price",
    "description",
    "imagePath",
    "user"
  ]);

  res.send(result);
};

exports.createAd = async (req, res) => {
  let ad = _.pick(req.body, [
    "title",
    "price",
    "description",
    "status",
    "active",
    "user",
    "category"
  ]);
  ad.user = _.pick(user, [
    "_id",
    "email",
    "username",
    "phoneNumber",
    "location"
  ]);
  console.log(ad.user);
  let newAd = new db.Ad(ad);
  await newAd.save();
  res.send({ message: "Item created sucessfully", item: newAd });
};
exports.getUser = async (req, res) => {
  let { _id } = req.params;
  let ad = await db.Ad.find({ _id: _id });
  let user = await db.User.find({ _id: ad.userId });
  res.send(user);
};
exports.deleteAd = async (req, res) => {
  let { _id } = req.params;

  let result = await db.Ad.findOneAndDelete({ _id: _id }, (err, result) => {
    if (!result) res.status(404).send("Item does not exist");
    else res.status(200).send(`Item with id: ${_id} deleted successfully`);
  });
};

exports.editAd = async (req, res) => {
  await db.Ad.find({ _id: req.params._id }, (err, result) => {
    if (result.length < 1) res.status(404).send("does not exist ");
  });
  await db.Ad.findByIdAndUpdate({ _id: req.params._id }, req.body);
  res.status(200).send(`Item with id: ${req.params._id} updated successfully`);
};
