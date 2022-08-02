import { Link, useNavigate, useParams } from "react-router-dom";
import products from "../products";
import React, { useState, useEffect } from "react";

import {
  Row,
  Col,
  Image,
  ListGroup,
  Card,
  Button,
  Form,
} from "react-bootstrap";
import Rating from "../components/Rating";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

import { listDrtailsProducts } from "../actions/productActions";
import Loader from "../components/Loader";
import Message from "../components/Message";



const ProductScreen = () => {

  const { id } = useParams();
  const dispatch = useDispatch();

  const [qty, setQty] = useState(0);
  // const [product, setProducts] = useState({});
  const productDetails = useSelector((state) => state.productDetails);
  const { error, loading, product } = productDetails;
  const navigate=useNavigate()
  useEffect(() => {
    dispatch(listDrtailsProducts(id));
  }, [id]);
  // const product=products.find((p)=>p._id===id)
  if (!product) {
    return <Loader></Loader>;
  }
  console.log("hi", typeof product?.countInStock);

  const addToCartHandler=()=>{
    console.log("Hello")
   navigate(`/cart/${id}?qty=${qty}`)
  }
  return (
    <div>
      <Link className="btn btn-light my-3" to="/">
        Go Back
      </Link>

      {loading ? (
        <Loader></Loader>
      ) : error ? (
        <Message></Message>
      ) : (
        <Row>
          <Col md={6}>
            <Image src={product?.image} alt={product.name} fluid />
          </Col>
          <Col md={3}>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <h3>{product?.name}</h3>
              </ListGroup.Item>
              <ListGroup.Item>
                <Rating
                  value={product?.rating}
                  text={`${product?.numReviews} reviews`}
                />
              </ListGroup.Item>
              <ListGroup.Item>Price: ${product?.price}</ListGroup.Item>
              <ListGroup.Item>
                Description: {product?.description}
              </ListGroup.Item>
              {product.countInStock > 0 && (
                <ListGroup.Item>
                  <Row>
                    <Col>Qty</Col>
                    <Col>
                      <Form.Control
                        as="select"
                        value={qty}
                        onChange={(e) => setQty(e.target.value)}
                      >
                        {[...Array(product?.countInStock).keys()].map((x) => (
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
                <Button
                  className="bt-block "
                  type="button"
                  disabled={product.countInStock === 0}
                  onClick={addToCartHandler}
                >Add To Cart</Button>
              </ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>
      )}
    </div>
  );
};

export default ProductScreen;
