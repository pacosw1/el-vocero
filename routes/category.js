var express = require("express");
var router = express.Router();
var helpers = require("../helpers/categoryHelper");
// const admin = require("../middleware/admin");
// const auth = require("../middleware/auth");
router
  .route("/")
  .get(helpers.getCategories)
  .post(helpers.createCategory);

router
  .route("/:_id")
  .get(helpers.getCategory)
  .delete(helpers.deleteCategory);
//   .put(helpers.editCategory);

module.exports = router;
