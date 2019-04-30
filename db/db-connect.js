var mongoose = require("mongoose");
mongoose.set("debug", true);
mongoose.set("useCreateIndex", true);
mongoose.connect(
  process.env.vocero_db,
  {
    dbName: "el-vocero",
    useNewUrlParser: true
  },
  () => console.log("connected to " + process.env.vocero_db)
);

mongoose.Promise = Promise;

module.exports.User = require("./models/user");
module.exports.Category = require("./models/category");
module.exports.Ad = require("./models/ad");
module.exports.Image = require("./models/image");
module.exports.Favorite = require("./models/favorite");
module.exports.Location = require("./models/location");
module.exports.Message = require("./models/message");
