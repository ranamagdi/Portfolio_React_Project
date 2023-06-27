import React from "react";
import ProjectCard from "./ProjectCard";
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import TrackVisibility from 'react-on-screen';

function Projects(){


  const projects = [
    {
      title: "Book Store",
      description: "E-Commerce website",
      imgUrl:'images/project1.png',
    },
    {
      title: "Book Shop",
      description: "Design Website",
      imgUrl: 'images/project3.png',
    },
    {
      title: "3D models website",
      description: "Design Website",
      imgUrl: 'images/project4.png',
    },
    {
      title: "Business Startup",
      description: "Bootstrap design",
      imgUrl: 'images/project-img3.png',
    },
    {
      title: "Business Startup",
      description: "Bootstrap design",
      imgUrl:'images/project5.png',
    },
    {
      title: "Game Development",
      description: "Design Website",
      imgUrl: 'images/project6.png',
    },
  ];

    return(
      <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>My Project</h2>
                <p>My name is Rana , i live in Egypt-Cairo , this is my 2nd project in react.js</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">1st Section</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">2nd Section </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">3rd Section </Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="section">
                      <p>My name is Rana , i live in Egypt-Cairo , this is my 2nd project in react.js</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>My name is Rana , i live in Egypt-Cairo , this is my 2nd project in react.js</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>

    </section>

    )
}
export default Projects;
