import React from "react";
import { Card } from "react-bootstrap";
import commaNumber from "comma-number";
import Rating from "./Rating";

import "./product.css";

const Product = ({ product }) => {
  return (
    <Card className="my-3 p-3 rounded h-100" border="dark bold">
      <a href={`/product/${product._id}`}>
        <div className="my-3 p-1">
          <Card.Img src={product.image} variant="top" />
        </div>
      </a>

      <Card.Body className="card-body">
        <a
          href={`/product/${product._id}`}
          style={{ textDecoration: "none", color: "black" }}
        >
          <Card.Title as="div">
            <strong>{product.name}</strong>
          </Card.Title>
        </a>
        <Card.Text as="div">
          <Rating
            value={product.rating}
            text={`${product.numReviews} reviews`}
          />
        </Card.Text>
        <Card.Text className="price-text" as="h5">
          ${commaNumber(product.price)}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Product;
