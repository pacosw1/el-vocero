var express = require("express");
var router = express.Router();
var helpers = require("../helpers/locationHelper");
// const admin = require("../middleware/admin");
// const auth = require("../middleware/auth");

router
  .route("/")
  .post(helpers.createLocation)
  .get(helpers.getLocations);

router
  .route("/:_id")
  .get(helpers.getLocation)
  .delete(helpers.deleteLocation);

module.exports = router;
