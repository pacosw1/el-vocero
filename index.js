let express = require("express");
let app = express();
var cors = require("cors");
var multer = require("multer");
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
let productsRoute = require("./routes/product");
let imagesRoute = require("./routes/image");

app.use("/users", usersRoute);
app.use("/products", productsRoute);
app.use("/images", imagesRoute);

app.get("/", (req, res) => {
  res.send("Welcome to Online-Store API");
});
