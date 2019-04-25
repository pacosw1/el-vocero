let db = require("../db/db-connect");

exports.getUsers = async (req, res) => {
  let users = await db.User.find();
  if (users.length < 1) res.status(404).send("No users found");
  else res.status(200).send(users);
};

exports.getUser = async (req, res) => {
  let user = await db.User.findById({ _id: req.params._id }, (err, result) => {
    if (result) res.status(200).send(result);
    else res.status(404).send("User with diven id not found");
  });
};

exports.createUser = async (req, res) => {
  let newUser = new db.User(req.body);
  await newUser.save();
  res.send({ message: "User registered sucessfully", user: newUser });
};

exports.deleteUser = async (req, res) => {
  let { _id } = req.params;

  await db.User.findOneAndDelete({ _id: _id }, (err, result) => {
    if (!result) res.status(404).send("User does not exist");
    else res.status(200).send(`User with id: ${_id} deleted successfully`);
  });
};

exports.editUser = async (req, res) => {
  await db.User.find({ _id: req.params._id }, (err, result) => {
    if (result.length < 1) res.status(404).send("User does not exist ");
  });
  await db.User.findByIdAndUpdate({ _id: req.params._id }, req.body);
  res.status(200).send(`User with id: ${req.params._id} updated successfully`);
};
