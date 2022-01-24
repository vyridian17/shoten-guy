import express from "express";
import dotenv from "dotenv";
import connectDB from "./db.js";
import colors from "colors";
import products from "./data/products.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;
connectDB();

// ROUTES ==========

app.get("/api/products", (req, res) => {
  res.json(products);
});

app.get("/api/products/:id", (req, res) => {
  const product = products.find((p) => p._id === req.params.id);
  res.json(product);
});

app.listen(
  PORT,
  console.log(
    `Listening at http://localhost:${PORT} (mode: ${process.env.NODE_ENV})`
      .yellow.italic
  )
);
