var express = require("express");
var router = express.Router();
var multer = require("multer");
let helpers = require("../helpers/messageHelper");

router.route("/").post(helpers.sendMessage);

router.route("/:userId", helpers.getMessages);

module.exports = router;
