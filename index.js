const express = require("express");
const mongoose = require("mongoose");
const searchProduct = require("./product.controller");

const app = express();
const PORT = 8000;

app.use(express.json());

const dbConnection = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/Product");
    console.log(`DB connected`);
  } catch (error) {
    console.log(error);
  }
};

app.get("/product", searchProduct);

app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
  dbConnection();
});
