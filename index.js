let express = require("express");
require("dotenv").config({ path: "./secret.env" });
var cors = require("cors");
var multer = require("multer");

let app = express();

app.use("/uploads", express.static(__dirname + "/uploads"));
exports.storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, "./uploads");
  },
  filename: function(req, file, cb) {
    let extension = "." + file.mimetype.split("/")[1];
    cb(null, `${Date.now()}${extension}`);
  }
});

let port = process.env.port || 3001;
let bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
require("express-async-errors");

app.use(cors({ origin: "http://localhost:3000" }));

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});

let usersRoute = require("./routes/user");
let adsRoute = require("./routes/ad");
let imagesRoute = require("./routes/image");
let categoryRoute = require("./routes/category");
let favoriteRoute = require("./routes/favorite");
let locationRoute = require("./routes/location");
let messageRoute = require("./routes/message");
let authRoute = require("./routes/auth");

app.use("/users", usersRoute);
app.use("/ads", adsRoute);
app.use("/images", imagesRoute);
app.use("/categories", categoryRoute);
app.use("/favorites", favoriteRoute);
app.use("/locations", locationRoute);
app.use("/auth", authRoute);

// app.use("/messages", messageRoute);

app.get("/", (req, res) => {
  res.send("El_Vocero_Api 1.0.0");
});
