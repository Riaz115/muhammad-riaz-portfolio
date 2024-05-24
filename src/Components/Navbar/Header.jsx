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

  // this is for close the navbar
  const [forLink, setForLink] = useState("");

  // this is function for every navlink
  const forEveryNavLink = () => {
    setForLink(false);
  };

  // this is function for the toggler button click
  const HandleTogglebtnClick = () => {
    setForLink(true);
  };
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
            onClick={HandleTogglebtnClick}
          />
          <Navbar.Collapse
            id="responsive-navbar-nav"
            className={forLink ? "show" : "shows"}
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
