const { Schema, mongoose } = require("mongoose");

const BrandSchema = new Schema({
  name: {
    type: String,
  },
});

const brand = mongoose.model("Brand", BrandSchema);

module.exports = brand;
