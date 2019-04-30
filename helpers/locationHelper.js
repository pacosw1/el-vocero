let db = require("../db/db-connect");

exports.getLocations = async (req, res) => {
  let items = await db.Location.find();
  if (items.length < 1) res.status(404).send("No locations found");
  else res.status(200).send(items);
};

exports.getLocation = async (req, res) => {
  let loc = await db.Location.findById(
    { _id: req.params._id },
    (err, result) => {
      if (result) res.status(200).send(result);
      else res.status(404).send("Location with given id not found");
    }
  );
};

exports.createLocation = async (req, res) => {
  let newLoc = new db.Location(req.body);
  await newLoc.save();
  res.send({ message: "Location created sucessfully", loc: newLoc });
};

exports.deleteLocation = async (req, res) => {
  let { _id } = req.params;

  await db.Location.findOneAndDelete({ _id: _id }, (err, result) => {
    if (!result) res.status(404).send("Location does not exist");
    else res.status(200).send(`Location with id: ${_id} deleted successfully`);
  });
};

// exports.editAd = async (req, res) => {
//   await db.Ad.find({ _id: req.params._id }, (err, result) => {
//     if (result.length < 1) res.status(404).send("does not exist ");
//   });
//   await db.Ad.findByIdAndUpdate({ _id: req.params._id }, req.body);
//   res.status(200).send(`Item with id: ${req.params._id} updated successfully`);
// };
