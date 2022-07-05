import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
const Header = () => {
  return (
    <header>
      <Navbar bg='light' variant='red' expand='lg' collapseOnSelect>
        <Container>
          {' '}
          <Navbar.Brand href='/' style={{ color: 'red', fontWeight: 'bold' }}>
            Selften
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ml-auto'>
              <Nav.Link href='/cart'>
                {' '}
                <i className='fas fa-shopping-cart'></i> Cart
              </Nav.Link>
              <Nav.Link href='/login'>
                <i className='fas fa-user'></i>Sign in
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div
        style={{ backgroundColor: '#dc143c', padding: '10px', color: 'white' }}>
        <div>Top Up</div>
      </div>
    </header>
  );
};

export default Header;
