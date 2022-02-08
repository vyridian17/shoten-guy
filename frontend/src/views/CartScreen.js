import React, { useEffect } from 'react';
import { Link, useNavigate, useParams, useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col, ListGroup, Image, Form, Button, Card } from 'react-bootstrap';
import { addToCart, removeFromCart } from '../actions/cartActions'
import commaNumber from "comma-number";
import Message from '../components/Message'


const CartScreen = ({history}) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const qty = new URLSearchParams(location.search).get('qty');
  
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart);
  const { cartItems } = cart;
  
  useEffect(() => {
    if (id) {
      dispatch(addToCart(id, qty));
    }
  }, [dispatch, id, qty])

  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id))
  }

  const checkoutHandler = () => {
    navigate('/login?redirect=shipping')
  }

  return <Row>
    <Col md={8}>
      <h1>Shopping Bag</h1>
      {!cartItems.length ? (
        <Message>Your bag is empty. <Link to='/'>Return</Link></Message>
      ) : (
          <ListGroup variant='flush'>
            {cartItems.map(item => (
              <ListGroup.Item key={item.product}>
                <Row>
                  <Col md={2}>
                    <Image src={item.image} alt={item.name} fluid rounded />
                  </Col>
                  <Col md={3}>
                    <Link to={`/product/${item.product}`}>{item.name}</Link>
                  </Col>
                  <Col md={2}>${commaNumber(item.price)}</Col>
                  <Col md={2}>
                    <Form.Control as='select' value={item.qty}
                      onChange={(e) => dispatch(addToCart(item.product, Number(e.target.value)))}>
                      {[...Array(item.countInStock).keys()].map(x => (
                        <option key={x + 1} value={x + 1}>
                          {x + 1}
                        </option>
                      ))}
                  </Form.Control>
                  </Col>
                  <Col md={2}>
                    <Button type='button' varant='light' onClick={() => removeFromCartHandler(item.product)}>
                      <i className='fas fa-trash'></i>
                    </Button>
                  </Col>
                </Row>
              </ListGroup.Item>
            ))}
        </ListGroup>
      )}
    </Col>
    <Col md={4}>
      <Card>
        <ListGroup variant='flush'>
          <ListGroup.Item>
            <h2>{cartItems.reduce((acc, item) => acc + Number(item.qty), 0)} items</h2>
            ${commaNumber(cartItems.reduce((acc, item) => acc + Number(item.qty) * item.price, 0).toFixed(2))}
          </ListGroup.Item>
          <ListGroup.Item>
            <Button
              type='button'
              className='btn-block'
              disabled={cartItems.length === 0}
              onClick={checkoutHandler}>
              Checkout
            </Button>
          </ListGroup.Item>
      </ListGroup>
      </Card>
    </Col>
    </Row>;
};

export default CartScreen;
