import { Container, Row, Col, Tab, Nav } from "react-bootstrap"
import { ProjectCard } from "./ProjectCard"
import projImg1 from "../assets/img/project-img1.png"
import projImg2 from "../assets/img/project-img2.png"
import projImg3 from "../assets/img/project-img3.png"

import proBtn from "../assets/img/project-button.jpg"
import proPopup from "../assets/img/project-popup.jpg"
import proToast from "../assets/img/project-toast.jpg"

import colorSharp2 from "../assets/img/color-sharp2.png"
import 'animate.css'
import TrackVisibility from 'react-on-screen'

export const Projects = () => {

  const projects1 = [
    {
      title: "Coolgame Web",
      description: "Web development",
      imgUrl: projImg1,
    },
    {
      title: "Course Web",
      description: "Web design",
      imgUrl: projImg2,
    },
    {
      title: "RentNDrive",
      description: "Web design",
      imgUrl: projImg3,
    },
    {
      title: "Bookhub",
      description: "Web design",
      imgUrl: projImg1,
    },
    {
      title: "Ecommerce Web",
      description: "Web design",
      imgUrl: projImg2,
    },
    {
      title: "TopGames Web",
      description: "Web design",
      imgUrl: projImg3,
    },
  ]
  const projects2 = [
    {
      title: <a href="https://react-button-reusable-component.vercel.app/" target="_blank" rel="noopener noreferrer" className="no-underline text-white hover:underline">
        Button Reusable Component
      </a>,
      description: "Design & Development",
      imgUrl: proBtn,
    },
    {
      title: <a href="https://react-popup-reusable-component.vercel.app/" target="_blank" rel="noopener noreferrer" className="no-underline text-white hover:underline">
        Popup Reusable Component
      </a>,
      description: "Design & Development",
      imgUrl: proPopup,
    },
    {
      title: <a href="https://react-toast-reusable-component.vercel.app/" target="_blank" rel="noopener noreferrer" className="no-underline text-white hover:underline">
        Toast Reusable Component
      </a>,
      description: "Design & Development",
      imgUrl: proToast,
    },
  ]
  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Projects</h2>
                  <p>
                    Browse through my portfolio to explore projects ranging from modern interfaces to powerful web systems.
                    If you're looking for an expert to bring your ideas to life, feel free to get in touch!
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                      <Nav.Item className="cursor-pointer">
                        <Nav.Link eventKey="first">Web Design</Nav.Link>
                      </Nav.Item>
                      <Nav.Item className="cursor-pointer">
                        <Nav.Link eventKey="second">Wordpress</Nav.Link>
                      </Nav.Item>
                      <Nav.Item className="cursor-pointer">
                        <Nav.Link eventKey="third">Reusable Component</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                      <Tab.Pane eventKey="first">
                        <Row>
                          {
                            projects1.map((project, index) => {
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
                      <Tab.Pane eventKey="second">

                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <Row>
                          {
                            projects2.map((project, index) => {
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
                    </Tab.Content>
                  </Tab.Container>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
