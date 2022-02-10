import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import { notFound, errorHandler } from './middleware/errorMid.js'

// dev dependencies
import colors from "colors";
import morgan from 'morgan';

// routes
import productRoutes from './routes/productRoutes.js'
import userRoutes from './routes/userRoutes.js'

dotenv.config();
connectDB();
const app = express();
app.use(express.json());
const PORT = process.env.PORT || 5000;

app.use('/api/products', productRoutes);
app.use('/api/users', userRoutes);
app.get('/', (req, res) => res.send(`Welcome to the API.`));

app.use(notFound);
app.use(errorHandler);

app.listen(
  PORT,
  console.log(
    `Listening at http://localhost:${PORT} (mode: ${process.env.NODE_ENV})`
      .yellow.italic
  )
);
