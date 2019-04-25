var mongoose = require("mongoose");
mongoose.set("debug", true);
mongoose.set("useCreateIndex", true);
mongoose.connect(
  "mongodb://localhost/el-vocero",
  {
    useNewUrlParser: true
  },
  () => console.log("connected to mongodb")
);

mongoose.Promise = Promise;

module.exports.User = require("./models/user");
module.exports.Category = require("./models/category");
module.exports.Ad = require("./models/ad");
module.exports.Image = require("./models/image");
