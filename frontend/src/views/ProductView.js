import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import {
  Row,
  Col,
  Image,
  ListGroup,
  Card,
  Button,
  Container,
} from "react-bootstrap";
import Rating from "../components/Rating";
import axios from "axios";
import commaNumber from "comma-number";

const ProductView = () => {
  const { id } = useParams();

  const [product, setProduct] = useState([]);
  // const [productImage, setProductImage] = useState("");

  useEffect(() => {
    const fetchProduct = async () => {
      const { data } = await axios.get(`/api/products/${id}`);
      // setProductImage(data.image);
      setProduct(data);
    };
    fetchProduct();
  }, []);

  return (
    <>
      <Link className="btn btn-dark my-3" to="/">
        Go Back
      </Link>
      <Row>
        <Col md={6}>
          <Image src={`${product.image}`} alt={product.name} fluid />
        </Col>
        <Col md={3}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h3>{product.name}</h3>
            </ListGroup.Item>
            <ListGroup.Item>
              <Rating
                value={product.rating}
                text={`${product.numReviews} reviews`}
              />
            </ListGroup.Item>
            <ListGroup.Item>${commaNumber(product.price)}</ListGroup.Item>
            <ListGroup.Item>{product.description}</ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={3}>
          <Card>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <Row>
                  <Col>Price:</Col>
                  <Col>
                    <strong>${commaNumber(product.price)}</strong>
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Inventory:</Col>
                  <Col>
                    {product.countInStock > 0
                      ? product.countInStock === 1
                        ? "Hurry! Only 1 Remaining."
                        : "Available"
                      : "Out of Stock"}
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Container style={{ textAlign: "center" }}>
                  <Button
                    className="btn text-center"
                    type="button"
                    disabled={product.countInStock === 0}
                  >
                    Add To Bag
                  </Button>
                </Container>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default ProductView;
