import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import AddBook from './AddBook';
function Header() {
  return (
    <div><Navbar expand="lg" className="bg-black fixed">
    <Container className=' text-white '>
      <Navbar.Brand  className=' text-white ' href="#home">React-Bootstrap</Navbar.Brand>
      <Navbar.Toggle  className=' text-white ' aria-controls="basic-navbar-nav" />
      <Navbar.Collapse  className=' text-white ' id="basic-navbar-nav">
        <Nav className="ms-auto ">
          <Nav.Link className='text-white mt-3 fw-bolder' to={'/'}>Home</Nav.Link>
          <Nav.Link className='mt-2 fw-bolder text-white'><AddBook/></Nav.Link>

          <NavDropdown title="Dropdown" id="basic-nav-dropdown">
            <NavDropdown.Item >Profile</NavDropdown.Item>
            <NavDropdown.Item  >
              Dashboard
            </NavDropdown.Item>

            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
           <Link to={'/'}>SignOut</Link>
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar></div>
  )
}

export default Header