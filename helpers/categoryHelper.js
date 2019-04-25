let db = require("../db/db-connect");

exports.getCategories = async (req, res) => {
  let categories = await db.Category.find();
  if (categories.length < 1) res.status(404).send("No categories found");
  else res.status(200).send(categories);
};

exports.getCategory = async (req, res) => {
  let user = await db.Category.findById(
    { _id: req.params._id },
    (err, result) => {
      if (result) res.status(200).send(result);
      else res.status(404).send("Category with given id not found");
    }
  );
};

exports.createCategory = async (req, res) => {
  let newCat = new db.Category(req.body);
  await newCat.save();
  res.send({ message: "Category registered sucessfully", category: newCat });
};

exports.deleteCategory = async (req, res) => {
  let { _id } = req.params;

  await db.Category.findOneAndDelete({ _id: _id }, (err, result) => {
    if (!result) res.status(404).send("Category does not exist");
    else res.status(200).send(`Category with id: ${_id} deleted successfully`);
  });
};
