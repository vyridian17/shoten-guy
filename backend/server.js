import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import colors from "colors";

import productRoutes from './routes/productRoutes.js'

dotenv.config();
connectDB();
const app = express();
const PORT = process.env.PORT || 5000;


app.get('/', (req, res) => res.send(`Welcome to the API.`));
app.use('/api/products', productRoutes);

app.listen(
  PORT,
  console.log(
    `Listening at http://localhost:${PORT} (mode: ${process.env.NODE_ENV})`
      .yellow.italic
  )
);
