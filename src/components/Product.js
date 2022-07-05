import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Rating from './Rating';
//import products from '../products'

const Product = ({ product }) => {
  return (
    <Card className='my-3  rounded'>
      <Link to={`/product/${product._id}`}>
        <Card.Img src={product.image} variant='top' />
      </Link>
      <Card.Body>
        <a href={`/product/${product._id}`}>
          <Card.Title as='div'>
            <strong>{product.name}</strong>
          </Card.Title>
        </a>
        <Card.Text as='div'>
          {/* <div className='my-3'>
            {product.rating} from {product.numReviews} reviews
          </div> */}

          <Rating value={product.rating} text={`${product.rating} reviews`}></Rating>
        </Card.Text>
        <Card.Text as='h3'>BDT:{product.price}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Product;
