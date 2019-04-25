let db = require("../db/db-connect");

exports.getFavorites = async (req, res) => {
  await db.Favorite.find({ userId: req.params.userId }, (err, result) => {
    if (result) res.status(200).send(result);
    else res.status(404).send("Favorites not found");
  });
};

exports.createFavorite = async (req, res) => {
  let newFav = new db.Favorite(req.body);
  await newFav.save();
  res.send({ message: "Favorite added sucessfully", favorite: newFav });
};

exports.deleteFavorite = async (req, res) => {
  let { _id } = req.params;

  await db.Favorite.findOneAndDelete({ _id: _id }, (err, result) => {
    if (!result) res.status(404).send("Favorite does not exist");
    else res.status(200).send(`Favorite with id: ${_id} deleted successfully`);
  });
};
