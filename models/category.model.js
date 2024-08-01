const { Schema, mongoose } = require("mongoose");

const CategorySchema = new Schema({
  name: {
    type: String,
  },
});

const category = mongoose.model("Category", CategorySchema);

module.exports = category;
