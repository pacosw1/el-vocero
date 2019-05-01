let db = require("../db/db-connect");

exports.getAll = async (req, res) => {
  await db.Image.find((err, result) => {
    if (result.length < 1) res.status(404).send("No images found");
    else res.status(200).send(result);
  });
};
exports.saveImage = async (req, res, next) => {
  let { path, originalname, size, filename, mimetype } = req.file;
  let extension = "." + mimetype.split("/")[1];
  let image = {
    adId: req.body.adId,
    path: "https://el-vocero-back.herokuapp.com" + path //put prefix as env.variable
  };
  let newImage = new db.Image(image);
  res.send(await newImage.save());
  next();
};

exports.getImages = async (req, res) => {
  let { adId } = req.params;

  await db.Image.find({ adId: adId }, (err, result) => {
    if (result.length < 1) res.status(404).send("No Images found");
    else {
      result = result.map(image => image.path);
      res.send(result);
    }
  });
};

exports.getImage = async (req, res) => {
  let image = await db.Image.findById(
    { _id: req.params._id },
    (err, result) => {
      if (result) res.status(200).send(result);
      else res.status(404).send("Image with given id not found");
    }
  );
};

exports.deleteImage = async (req, res) => {
  let { _id } = req.params;

  await db.Image.findOneAndDelete({ _id: _id }, (err, result) => {
    if (!result) res.status(404).send("Image does not exist");
    else res.status(200).send(`Image with id: ${_id} deleted successfully`);
  });
};
