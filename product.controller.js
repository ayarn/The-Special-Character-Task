const product = require("./models/product.model");
const review = require("./models/review.model");
const category = require("./models/category.model");
const brand = require("./models/brand.model");

const searchProduct = async (req, res) => {
  try {
    const { handle, categoryName, brandName, minRating, maxRating } = req.query;

    const filters = [];

    if (handle) {
      filters.push({ handle });
    }

    if (categoryName) {
      const categoryId = await category.findOne({ name: categoryName });
      if (categoryId) {
        filters.push({ categoryId: categoryId._id });
      }
    }

    if (brandName) {
      const brandId = await brand.findOne({ name: brandName });
      if (brandId) {
        filters.push({ brandId: brandId._id });
      }
    }

    if (minRating && maxRating) {
      const ratings = await review.find({
        rating: { $gte: parseInt(minRating), $lte: parseInt(maxRating) },
      });

      const productIds = ratings.map((rating) => rating.productId);
      if (productIds.length > 0) {
        filters.push({ _id: { $in: productIds } });
      }
    }

    if (filters.length === 0) {
      throw new Error("No filters provided");
    }

    const products = await product.find({ $and: filters });

    if (!products || products.length === 0) {
      throw new Error("No products found matching the criteria");
    }

    res.status(200).json({ products });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};

module.exports = searchProduct;
