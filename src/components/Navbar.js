import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import LewisImage from '../images/lewis.jpg';

const NavbarComponent = () => (
  <Navbar fixed="top" expand="lg">
    <Navbar.Collapse className="d-flex flex-column">
      <Navbar.Brand href="#">
        <span className="d-block lewis-image-wrapper p-2">
          <img src={LewisImage} id="lewis-image" />
        </span>
      </Navbar.Brand>
      <Nav className="d-flex flex-column text-center mt-3">
        <Nav.Link href="#about">About</Nav.Link>
        <Nav.Link href="#experience">Experience</Nav.Link>
        <Nav.Link href="#education">Education</Nav.Link>
        <Nav.Link href="#skills">Skills</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
)

export default NavbarComponent;