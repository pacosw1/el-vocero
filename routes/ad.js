var express = require("express");
var router = express.Router();
var helpers = require("../helpers/AdHelper");
// const admin = require("../middleware/admin");
// const auth = require("../middleware/auth");

//
router
  .route("/")
  .get(helpers.getAds)
  .post(helpers.createAd);

router
  .route("/:_id")
  .get(helpers.getAd)
  .delete(helpers.deleteAd)
  .put(helpers.editAd);

module.exports = router;
