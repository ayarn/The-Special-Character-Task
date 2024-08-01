const { Schema, mongoose } = require("mongoose");

const ProductVariantSchema = new Schema({
  name: {
    type: String,
  },
  price: {
    type: Number,
  },
});

const product_variant = mongoose.model("ProductVariant", ProductVariantSchema);

module.exports = product_variant;
