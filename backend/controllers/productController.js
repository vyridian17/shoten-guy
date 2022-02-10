import Product from '../models/productModel.js'
import mongoose from 'mongoose';

// @desc Fetch all products
// @route GET /api/products
// @access Public

const getProducts = async (req, res) => {
  const products = await Product.find({}) // MongoDB returns a promise
  res.json(products);
}

// @desc Fetch single product
// @route GET /api/products/:id
// @access Public

const getProductById = async (req, res) => {
 if (mongoose.Types.ObjectId.isValid(req.params.id)) {
    const product = await Product.findById(req.params.id);

    if (product) {
        res.json(product);
    } else {
        res.status(404).json({
            message: "Product not found",
        });
    }
  } else {
    res.status(404).json({
        message: "Invalid ID. Product not found",
    });
  }
}

export {
  getProductById,
  getProducts
}