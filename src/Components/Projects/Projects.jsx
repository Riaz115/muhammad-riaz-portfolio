import React from "react";
import "./Projects.css";
import { Container, Row, Card, Col } from "react-bootstrap";

function Projects() {
  const MyProjects = [
    {
      id: 1,
      title: "React Resturent Website ",
      description: "this website is completly made with the  React . js",
      image:
        "https://cdn.pixabay.com/photo/2018/02/04/17/39/crypto-currency-3130381_640.jpg",
      demo: "https://react-project-food-and-resturent-website.vercel.app/",
      source:
        "https://github.com/Riaz115/React-Project-Food-And-Resturent-Website.git",
    },
    {
      id: 2,
      title: "React Bussiness  Website ",
      description: "this website is completly made with the React . js",
      image:
        "https://cdn.pixabay.com/photo/2017/05/02/15/30/streets-2278471_640.jpg",
      demo: "https://react-project-fully-responsive-bussiness-website.vercel.app/",
      source:
        "https://github.com/Riaz115/React-Project-Fully-Responsive-Bussiness-Website.git",
    },
    {
      id: 3,
      title: "Social Media Marketing",
      description: "this website is made with the html css javascript",
      image:
        "https://cdn.pixabay.com/photo/2016/08/16/17/12/skyscrapers-1598418_640.jpg",
      demo: "https://social-media-marketing-website.vercel.app/",
      source: "https://github.com/Riaz115/Social-Media-Marketing-Website.git",
    },
    {
      id: 4,
      title: "The Food  And  Resturent ",
      description: "this website is made with the html css javascript",
      image:
        "https://cdn.pixabay.com/photo/2021/03/02/01/07/cyberpunk-6061251_640.jpg",
      demo: "https://food-and-resturent-website.vercel.app/",
      source: "https://github.com/Riaz115/Food-And-Resturent-Website.git",
    },
    {
      id: 5,
      title: "E-Commerece Website  ",
      description: "this website is made with the html css javascript",
      image:
        "https://cdn.pixabay.com/photo/2018/02/04/17/39/crypto-currency-3130381_640.jpg",
      demo: "https://e-commerece-website.vercel.app/",
      source: "https://github.com/Riaz115/E-Commerece-Website.git",
    },
  ];

  return (
    <>
      <section id="projects">
        <Container>
          <h1 className="pro-heading">projects</h1>
          <Row className="d-flex justify-content-center align-items-center">
            {MyProjects.map((data) => (
              <Col
                lg={3}
                md={5}
                className="for-card my-3 mx-2 text-center d-flex justify-content-center align-items-center"
                key={data.id}
              >
                <Card data-aos="flip-left" data-aos-duration="1000">
                  <div className="for-image d-flex justify-content-center align-items-center ">
                    <img
                      src={data.image}
                      alt="project-image "
                      className="img-fluid card-image"
                    />
                  </div>
                  <Card.Body>
                    <Card.Title>
                      <h5 className="card-title">{data.title}</h5>
                    </Card.Title>
                    <Card.Text>
                      <p className="card-text">{data.description}</p>
                    </Card.Text>
                    <div className="for-buttons">
                      <a
                        href={data.demo}
                        target="/blank"
                        className="mx-2 mb-2 btn btn-primary for-btn"
                      >
                        Demo
                      </a>
                      <a
                        href={data.source}
                          target="/blank"
                        className="mx-2 mb-2 btn btn-warning for-btn"
                      >
                        Code
                      </a>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Projects;
