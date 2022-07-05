import React, { useState ,useEffect} from 'react';
import { Row, Col } from 'react-bootstrap';
import Product from '../components/Product';
// import products from '../products';
import axios from 'axios'
const HomeScreen = () => {

  const [products,setProducts]=useState([])

  useEffect(()=>{
    const fetchData=async()=>{
      const data=await axios.get('/api/v1/product')
      console.log()
      setProducts(data.data.data.products)
    }
    fetchData()
  })
  console.log(products)

  return (
    <>
      <h1>Latest Products</h1>
      <Row>
        {products.map((product) => (
          <Col sm={12} md={6} lg={4} xl={3}>
            <Product product={product} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default HomeScreen;
