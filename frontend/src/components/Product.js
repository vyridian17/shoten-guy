import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import commaNumber from "comma-number";
import Rating from "./Rating";

import "./product.css";

const Product = ({ product }) => {
  return (
    <Card className="my-3 p-3 rounded h-100" border="dark bold">
      <Link to={`/product/${product._id}`}>
        <div className="my-3 p-1">
          <Card.Img src={product.image} variant="top" />
        </div>
      </Link>

      <Card.Body className="card-body">
        <Link
          to={`/product/${product._id}`}
          style={{ textDecoration: "none", color: "black" }}
        >
          <Card.Title as="div">
            <strong>{product.name}</strong>
          </Card.Title>
        </Link>
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
