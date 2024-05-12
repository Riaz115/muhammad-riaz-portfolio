import React from "react";
import { Container, Row } from "react-bootstrap";
import Html from "../../assests/skills/html.png";
import Css from "../../assests/skills/css.png";
import Nodejs from "../../assests/skills/node.png";
import Reacts from "../../assests/skills/react.png";
import Pythons from "../../assests/skills/python.webp";
import Cplus from "../../assests/skills/Cplus.jpg";
import Graphqls from "../../assests/skills/graphql.png";
import Javascript from "../../assests/skills/javascript.png";
import Mongodb from "../../assests/skills/mongodb.png";
import "./Skills.css";

function Skills() {
  const MySkills = [
    {
      title: "HTML",
      Image: Html,
    },
    {
      title: "CSS",
      Image: Css,
    },
    {
      title: "JavaSrcript",
      Image: Javascript,
    },

    {
      title: "React",
      Image: Reacts,
    },
    {
      title: "NODE.JS",
      Image: Nodejs,
    },
    {
      title: "MongoDB",
      Image: Mongodb,
    },
    {
      title: "Python",
      Image: Pythons,
    },
    {
      title: "C++",
      Image: Cplus,
    },
    {
      title: "GraphQL",
      Image: Graphqls,
    },
  ];

  return (
    <>
      <section id="skills">
        <Container>
          <Row>
            <h1 className="skills-title">Skills</h1>
            <div className="for-items">
              {MySkills.map((data, index) => (
                <div
                  className="for-skills"
                  key={index}
                  data-aos="flip-right"
                  data-aos-duration="1000"
                >
                  <img
                    src={data.Image}
                    alt="skills-images"
                    className="
                      img-fluid"
                  />
                  <h1 className="title">{data.title}</h1>
                </div>
              ))}
            </div>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Skills;
