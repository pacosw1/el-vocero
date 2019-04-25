var express = require("express");
var router = express.Router();
var helpers = require("../helpers/favoriteHelper");
// const admin = require("../middleware/admin");
// const auth = require("../middleware/auth");

router.route("/").post(helpers.createFavorite);

router.route("/:_id").delete(helpers.deleteFavorite);

router.route("/user/:userId").get(helpers.getFavorites);

module.exports = router;
