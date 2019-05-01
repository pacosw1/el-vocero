const express = require("express"),
  router = express.Router(),
  db = require("../db/models/user"),
  bcrypt = require("bcrypt");
require("dotenv");

const auth = async (req, res) => {
  let { username, password } = req.body;
  let notFound = { status: 0, message: "invalid username or password" };

  console.log(req.body);
  let user = await db.findOne({ username: username });
  console.log(user);
  if (!user) res.send(notFound);

  //input validation
  if (!username || !password) return res.send(notFound);
  //wtf
  //verify password
  let validPassword = await bcrypt.compare(password, user.password);
  console.log(validPassword);
  if (!validPassword) return res.send(notFound);

  //generate web token on successful sign in
  let token = user.generateToken();
  res
    .header("token", token)
    .send({ status: 1, token: token, message: "Sign in successfull" }); //res.header("token", token ).send(token);
};
router.route("/").post(auth);

module.exports = router;
