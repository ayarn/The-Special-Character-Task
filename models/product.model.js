const { Schema, mongoose } = require("mongoose");

const ProductSchema = new Schema({
  name: {
    type: String,
  },
  handle: {
    type: String,
  },
  categoryId: {
    type: Schema.Types.ObjectId,
    ref: "Category",
  },
  brandId: {
    type: Schema.Types.ObjectId,
    ref: "Brand",
  },
  reviewId: {
    type: Schema.Types.ObjectId,
    ref: "Review",
  },
  variants: [
    {
      type: Schema.Types.ObjectId,
      ref: "ProductVariant",
      
    }
  ]
});

const product = mongoose.model("Product", ProductSchema);

module.exports = product;
