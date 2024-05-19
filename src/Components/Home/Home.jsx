import React, { useEffect, useRef } from "react";
import "./Home.css";
import { Container, Row, Col } from "react-bootstrap";
import MyImage from "../../assests/hero/Image.jpg";
import Mydata from "../AboutMe/mydata.pdf";
// this typed .js libary import to type text
import Typed from "typed.js";
function Home() {
  // yeah hum jis element pr tex type krna chaty hian us pr pass kry gy
  const MydataRef = useRef(null);
  useEffect(() => {
    const options = {
      strings: [
        "Welcome to my Profile",
        "i am Muhammad Riaz Ahmad",
        "i am Fronte-End Developer",
        " i am React Developer",
        "i am javascript Developer",
        "i am Backend Developer",
        "i am Node.js Developer",
        "i am Python Developer ",
        "i am Chatbot Developer",
      ],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
      cursorChar: "",
    };
    const RiazData = new Typed(MydataRef.current, options);
    return () => {
      RiazData.destroy();
    };
  });

  return (
    <>
      <section id="home">
        <Container>
          <Row className="d-flex align-items-center justify-content-center justify-content-lg-between ">
            <Col
              lg={5}
              className=" text-center"
              data-aos="fade-down-right"
              data-aos-duration="1000"
            >
              <div className="img mb-5 mb-lg-0">
                <img src={MyImage} alt="my-image" className="img-fluid" />
              </div>
            </Col>
            <Col
              lg={7}
              className="text-center for-text"
              data-aos="fade-up-left"
              data-aos-duration="1000"
            >
              <h1 className="title" ref={MydataRef}></h1>
              <a
                href={Mydata}
                download="mydata.pdf"
                className="btn btn-outline-warning for-btn"
              >
                Download Resume
              </a>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Home;
