import React from "react";
import { Card } from "react-bootstrap";
import commaNumber from "comma-number";
import Rating from "./Rating";

import "./product.css";

const Product = ({ product }) => {
  return (
    <Card className="my-3 p-3 rounded card-frame" border="dark">
      <a href={`/product/${product._id}`}>
        <Card.Img className="card-image" src={product.image} variant="top" />
      </a>

      <Card.Body>
        <a href={`/product/${product._id}`}>
          <Card.Title a="div">
            <strong>{product.name}</strong>
          </Card.Title>
        </a>
        <Card.Text as="div">
          <Rating
            value={product.rating}
            text={`${product.numReviews} reviews`}
          />
        </Card.Text>
        <Card.Text as="h5">${commaNumber(product.price)}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Product;
