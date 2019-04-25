var express = require("express");
var router = express.Router();
var multer = require("multer");
let mult = require("../index");
var upload = multer({ storage: mult.storage, preservePath: true });
let helpers = require("../helpers/imageHelper");

router
  .route("/")
  .get(helpers.getAll)
  .post(upload.single("file"), helpers.saveImage);

router
  .route("/:adId")

  .get(helpers.getImages);

router.route("/:_id").delete(helpers.deleteImage);

module.exports = router;
