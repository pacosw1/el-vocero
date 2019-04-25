let db = require("../db/db-connect");

exports.getAds = async (req, res) => {
  let items = await db.Ad.find();
  if (items.length < 1) res.status(404).send("No items found");
  else res.status(200).send(items);
};

exports.getAd = async (req, res) => {
  let ad = await db.Ad.findById({ _id: req.params._id }, (err, result) => {
    if (result) res.status(200).send(result);
    else res.status(404).send("Ad with diven id not found");
  });
};

exports.createAd = async (req, res) => {
  let newAd = new db.Ad(req.body);
  await newAd.save();
  res.send({ message: "Item created sucessfully", item: newAd });
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
