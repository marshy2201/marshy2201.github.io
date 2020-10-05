import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import LewisImage from '../images/lewis.jpg';

const NavbarComponent = () => (
  <Navbar collapseOnSelect variant="dark" fixed="top" expand="lg">
    <Navbar.Brand href="#about" className="mr-0">
      <span className="d-block d-lg-none">Lewis Marshall</span>
      <span className="d-none d-lg-block lewis-image-wrapper p-2">
        <img src={LewisImage} id="lewis-image" alt="Lewis Marshall" />
      </span>
    </Navbar.Brand>
    <Navbar.Toggle />
    <Navbar.Collapse className="flex-grow-0">
      <Nav defaultActiveKey="#about" className="d-flex flex-column text-center mt-3">
        <Nav.Link href="#about">About</Nav.Link>
        <Nav.Link href="#experience">Experience</Nav.Link>
        <Nav.Link href="#education">Education</Nav.Link>
        <Nav.Link href="#skills">Skills</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
)

export default NavbarComponent;