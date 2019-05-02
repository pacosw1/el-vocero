var express = require("express");
var router = express.Router();
var multer = require("multer");
let helpers = require("../helpers/messageHelper");

router
  .route("/")
  .get(helpers.getMessages)
  .post(helpers.sendMessage);

module.exports = router;
