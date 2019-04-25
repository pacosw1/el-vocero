var mongoose = require("mongoose");
//var categories = require("./category");
var type = mongoose.Schema.Types;

var imageSchema = new mongoose.Schema({
  adId: {
    type: type.ObjectId,
    required: "Ad ID is required"
  },
  path: {
    type: type.String,
    required: "An image path is required"
  }
});

var Image = mongoose.model("Image", imageSchema);

module.exports = Image;
/**
fieldname	Field name specified in the form	
originalname	Name of the file on the user's computer	
encoding	Encoding type of the file	
mimetype	Mime type of the file	
size	Size of the file in bytes	
destination	The folder to which the file has been saved	DiskStorage
filename	The name of the file within the destination	DiskStorage
path	The full path to the uploaded file	DiskStorage
buffer	A Buffer of the entire file	 */
