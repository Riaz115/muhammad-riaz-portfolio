import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Experiences.css";
import GoogleImage from "../../assests/company/google.png";
import MicrosoftImage from "../../assests/company/microsoft.png";
import NetflixImage from "../../assests/company/netflix.png";

function Expereinces() {
  const ExperienceData = [
    {
      id: "1",
      role: "Senior  Front End  Web Developer in React .js ",
      logo: "Google",
      enddate: "present",
      startdate: "25 August 2022",
      location: "115/9.L Sahiwal",
      experiences: [
        "worked on Google Gmail",

        "Worked with the google bard team ",
      ],
      contact: "ContactMe 0328-0182715",
      Image: GoogleImage,
    },
    {
      id: "2",
      role: "Senior  Back End  Web Developer in Python ",
      logo: "Netflix",
      enddate: "25 March 2021",
      startdate: "25 December 2020",
      location: "115/9.L Sahiwal ",

      experiences: [
        "worked on Google Gmail",
        "Worked with the google bard team ",
      ],
      contact: "ContactMe 0344-8488752",
      Image: MicrosoftImage,
    },
    {
      id: "3",
      role: "Senior Back End  Web Developer in Node.js ",
      logo: "Microsoft",
      enddate: "25 March 2021",
      startdate: "25 December 2020",
      location: "115/9.L Sahiwal ",

      experiences: [
        "worked on Google Gmail",
        "Worked with the google bard team ",
      ],
      contact: "ContactMe 0309-6642385",
      Image: NetflixImage,
    },
  ];

  return (
    <>
      <section id="experiences">
        <Container>
          <Row>
            <Col>
              <h1 className="ex-title">Experiences</h1>
              <div className="about-expereinces text-center">
                {ExperienceData.map((data) => (
                  <div
                    key={data.id}
                    className="every-box"
            
                  >
                    <div className="left ">
                      <img
                        src={`${data.Image}`}
                        alt="logo-img"
                        className="img-fluid"
                      />
                    </div>
                    <div className="right ">
                      <h1 className="for-title">{data.role}</h1>
                      <h4>
                        <span>{data.startdate}</span>
                        <span>{data.enddate}</span>
                        <span>{data.location}</span>
                      </h4>
                      <h5>{data.experiences[0]}</h5>
                      <h5>{data.experiences[1]}</h5>
                      <h3>{data.contact}</h3>
                    </div>
                  </div>
                ))}
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Expereinces;
