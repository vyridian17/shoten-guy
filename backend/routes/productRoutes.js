import express from "express";
const router = express.Router();
import mongoose from 'mongoose';
import Product from '../models/productModel.js'


// @desc Fetch all products
// @route GET /api/products
// @access Public

router.get("/", async (_, res) => {
  const products = await Product.find({}) // MongoDB returns a promise
  res.json(products);
});

// @desc Fetch single product
// @route GET /api/products/:id
// @access Public

router.get("/:id", async (req, res) => {
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
})

export default router;