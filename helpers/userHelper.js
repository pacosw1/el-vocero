let db = require("../db/db-connect");
const bcrypt = require("bcrypt");

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
exports.checkUsername = async (req, res) => {
  let { username } = req.params;
  let checkUsername = await db.User.find({ username: username });
  if (checkUsername.length < 1) {
    res.send({ status: 0, message: "username is unique" });
  } else {
    res.send({ status: 1, message: "username already exists" });
  }
};
exports.checkEmail = async (req, res) => {
  let { email } = req.params;
  let checkEmail = await db.User.find({ email: email });

  if (checkEmail.length < 1) {
    res.send({ status: 0, message: "email is unique" });
  } else {
    res.send({ status: 1, message: "Email already exists" });
  }
};

exports.createUser = async (req, res) => {
  let { password, email, username } = req.body;

  let emailExists = await db.User.findOne({ email: email });
  let usernameExists = await db.User.findOne({ username: username });
  console.log(emailExists);

  if (emailExists) return res.status(400).send("Email already exists");
  if (usernameExists) return res.status(400).send("Username already exists");

  let user = {
    email: email,
    username: username
  };

  const salt = await bcrypt.genSalt(10);
  const hashed = await bcrypt.hash(password, salt);

  user.password = hashed;

  user = new db.User(user);
  let token = user.generateToken();
  res.header("token", token).send(user);

  await user.save();

  res.send("User created successfully");
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
