import React, { useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import "./Header.css";

function Header() {


  // this is for close the navbar
  const [forLink, setForLink] = useState("");

  // this is function for every navlink
  const forEveryNavLink = () => {
    setForLink(true);
  };

  // this is function for the toggler button click
  const HandleTogglebtnClick = () => {
    if(forLink){
      
    setForLink(false);}
  };
  return (
    <>
      <Navbar
        expand="lg"
        data-aos="fade-down"
        data-aos-duration="1000"
      >
        <Container>
          <Navbar.Brand className="portfolio">Portfolio</Navbar.Brand>
          <Navbar.Toggle
            aria-controls="responsive-navbar-nav"
            className="toggler"
            onClick={HandleTogglebtnClick}
          />
          <Navbar.Collapse
            id="responsive-navbar-nav"
            className={forLink ? "shows" : ""}
          >
            <Nav className="ms-auto">
              <Nav.Link
                href="#home"
                className="navitem px-3"
                onClick={forEveryNavLink}
              >
                Home
              </Nav.Link>
              <Nav.Link
                href="#experiences"
                className="navitem px-3"
                onClick={forEveryNavLink}
              >
                Experiences
              </Nav.Link>
              <Nav.Link
                href="#skills"
                className="navitem px-3"
                onClick={forEveryNavLink}
              >
                Skills
              </Nav.Link>
              <Nav.Link
                href="#projects"
                className="navitem px-3"
                onClick={forEveryNavLink}
              >
                Projects
              </Nav.Link>
              <Nav.Link
                href="#contact"
                className="navitem px-3"
                onClick={forEveryNavLink}
              >
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
