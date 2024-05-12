import React, { useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import "./Header.css";

function Header() {
  const [sticky, setSticky] = useState(false);
  const HandleScroll = () => {
    const CheckScroll = document?.documentElement?.scrollTop;
    CheckScroll > 50 ? setSticky(true) : setSticky(false);
  };
  window.addEventListener("scroll", HandleScroll);
  return (
    <>
      <Navbar
        expand="lg"
        className={`${sticky === true ? "stickys" : ""}`}
        data-aos="fade-down"
        data-aos-duration="1000"
      >
        <Container>
          <Navbar.Brand className="portfolio">Portfolio</Navbar.Brand>
          <Navbar.Toggle
            aria-controls="responsive-navbar-nav"
            className="toggler"
          />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home" className="navitem px-3">
                Home
              </Nav.Link>
              <Nav.Link href="#experiences" className="navitem px-3">
                Experiences
              </Nav.Link>
              <Nav.Link href="#skills" className="navitem px-3">
                Skills
              </Nav.Link>
              <Nav.Link href="#projects" className="navitem px-3">
                Projects
              </Nav.Link>
              <Nav.Link href="#contact" className="navitem px-3">
                Contact
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
