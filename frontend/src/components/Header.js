import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Header () {
  return (
    <header>
      <Navbar
        bg='dark'
        variant='dark'
        expand='lg'
        collapseOnSelect>
        <Container>
          <Navbar.Brand as={Link} to='/'>
            Web-Shop
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='mr-auto'>
              <Nav.Link as={Link} to='/cart'>
                <i className='fas fa-shopping-cart'></i> Cart
              </Nav.Link>
              <Nav.Link as={Link} to='/login'>
                <i className='fas fa-user'></i> Login
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header
