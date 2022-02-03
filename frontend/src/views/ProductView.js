import { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams, useNavigate, Navigate } from "react-router-dom";
import {
  Row,
  Col,
  Image,
  ListGroup,
  Card,
  Button,
  Container,
  Form
} from "react-bootstrap";
import Rating from "../components/Rating";
import { listProductDetails } from "../actions/productActions";
import Loader from '../components/Loader';
import Message from '../components/Message';

import commaNumber from "comma-number";

const ProductView = ({history}) => {
  const [qty, setQty] = useState(0);
  const dispatch = useDispatch();
  const { id } = useParams();
  const productDetails = useSelector(state => state.productDetails)
  const { loading, error, product } = productDetails;
  const navigate = useNavigate();
  
  
  useEffect(() => {
    dispatch(listProductDetails(id));
  }, [dispatch, id]);

  const addToCartHandler = () => {
    navigate(`/cart/${id}?qty=${qty}`);
  }

  return (
    <>
      <Link className="btn btn-dark my-3" to="/">
        Go Back
      </Link>
      { loading ?
        <Loader />
        : error ? <Message variant='danger'>{error}</Message>
          : (
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
                    
                    {product.countInStock > 0 && (
                      <ListGroup.Item>
                        <Row>
                          <Col>Qty</Col>
                          <Col>
                            <Form.Control as='select' value={qty} onChange={(e) => setQty(e.target.value)}>
                              {[...Array(product.countInStock).keys()].map(x => (
                                <option key={x + 1} value={x + 1}>
                                  {x + 1}
                                </option>
                              ))}
                            </Form.Control>
                          </Col>
                        </Row>
                      </ListGroup.Item>
                    )}

                <ListGroup.Item>
                  <Container style={{ textAlign: "center" }}>
                        <Button
                          onClick={addToCartHandler}
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
           ) }
    </>
  );
};

export default ProductView;
