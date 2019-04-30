var express = require("express");
var router = express.Router();
var helpers = require("../helpers/userHelper");
// const admin = require("../middleware/admin");
// const auth = require("../middleware/auth");

router
  .route("/")
  .get(helpers.getUsers)
  .post(helpers.createUser);

router
  .route("/:_id")
  .get(helpers.getUser)
  .delete(helpers.deleteUser)
  .put(helpers.editUser);

router.route("/email/:email").get(helpers.checkEmail);
router.route("/username/:username").get(helpers.checkUsername);

module.exports = router;
