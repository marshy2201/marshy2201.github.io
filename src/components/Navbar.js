import React, { useState } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import LewisImage from '../images/lewis.jpg';
import { Link, animateScroll as scroll } from "react-scroll";

const NavbarComponent = () => {
  // expanded state
  const [expanded, setExpanded] = useState(false);

  // set expanded to false
  const closeNav = () => setExpanded(false);

  // scroll to top function
  const scrollToTop = () => scroll.scrollToTop();

  return (
    <Navbar 
      variant="dark" 
      fixed="top"
      expanded={expanded}
      onToggle={boolean => setExpanded(boolean)} 
      expand="lg"
    >
      <Navbar.Brand href="#" onClick={scrollToTop} className="mr-0">
        <span className="d-block d-lg-none">Lewis Marshall</span>
        <span className="d-none d-lg-block lewis-image-wrapper p-2">
          <img src={LewisImage} id="lewis-image" alt="Lewis Marshall" />
        </span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse className="flex-grow-0">
        <Nav className="d-flex flex-column text-center mt-3">
          <Link 
            href=""
            smooth='easeInOutQuart'
            spy
            to="about"
            onClick={closeNav} 
            className="nav-link"
          >About</Link>
          <Link 
            href=""
            smooth='easeInOutQuart'
            spy
            to="experience" 
            onClick={closeNav}
            className="nav-link"
          >Experience</Link>
          <Link
            href="" 
            smooth='easeInOutQuart'
            spy
            to="education" 
            onClick={closeNav}
            className="nav-link"
          >Education</Link>
          <Link 
            href=""
            smooth='easeInOutQuart'
            spy
            to="skills" 
            onClick={closeNav}
            className="nav-link"
          >Skills</Link>
          <Nav.Link href="/lewis-marshall-cv.pdf" active={false} target="_blank">CV</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavbarComponent;
