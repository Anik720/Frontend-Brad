import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer>
      <Container className='py-10'>
        <Row>
          <Col>Selften</Col>
          <Col>
            | Menu
            <div>Terms and condition</div>
            <div>Privacy and Policy</div>
            <div>Shipment info</div>
          </Col>
          <Col>| Get In Touch</Col>
          <Col>| Connect With Us</Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col className=' py-3'>Copyright &copy; Selften</Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
