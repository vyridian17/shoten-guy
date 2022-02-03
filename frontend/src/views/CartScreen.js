import React, { useEffect } from 'react';
import { Link, useNavigate, useParams, useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col, ListGroup, Image, Form, Button, Card } from 'react-bootstrap';
import { addToCart } from '../actions/cartActions'
import Message from '../components/Message'


const CartScreen = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const qty = new URLSearchParams(location.search).get('qty');
  

  return (<h1>Cart</h1>);
};

export default CartScreen;
