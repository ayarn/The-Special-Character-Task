const { Schema, mongoose } = require("mongoose");

const ReviewSchema = new Schema({
  rating: {
    type: Number,
  },
  comment: {
    type: String,
  },
});

const review = mongoose.model("Review", ReviewSchema);

module.exports = review;
