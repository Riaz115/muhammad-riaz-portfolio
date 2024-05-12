import React from "react";
import { Container, Row } from "react-bootstrap";
import "./Contact.css";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaSquareGithub } from "react-icons/fa6";
import { CgMail } from "react-icons/cg";
import { FaWhatsappSquare } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";

function Contact() {
  return (
    <>
      <section id="contact">
        <Container>
          <h1 className="contact-title">Contact</h1>
          <Row>
            <div
              className="for-icons"
              data-aos="zoom-out-up"
              data-aos-duration="1000"
            >
              <a
                href="https://www.instagram.com/riaz90603?utm_source=qr&igsh=OGU0MmVlOWVjOQ%3D%3D"
                target="_blank"
                className="icon-item"
              >
                <FaInstagram className="icon" />
              </a>
              <a
                href="https://www.github.com/riaz115"
                target="_blank"
                className="icon-item"
              >
                <FaSquareGithub className="icon" />
              </a>
              <a
                href="https://www.linkedin.com/in/riaz-ahmad-690870308"
                target="_blank"
                className="icon-item"
              >
                <FaLinkedin className="icon" />
              </a>
              <a
                href="mailto:riaz90603@gmail.com"
                target="_blank"
                className="icon-item"
              >
                <CgMail className="icon" />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61558080662338&mibextid=kFxxJD"
                target="_blank"
                className="icon-item"
              >
                <FaFacebookSquare className="icon" />
              </a>
              <a
                href="https://wa.me/+923280182715"
                target="_blank"
                className="icon-item"
              >
                <FaWhatsappSquare className="icon" />
              </a>
            </div>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Contact;
