import React from 'react'
import '../App.css'
import { useState } from 'react'
import Icon1 from '../asset/Proj1.PNG'
import Icon2 from '../asset/Proj2.PNG'
import Icon3 from '../asset/Proj3.PNG'
import Icon4 from '../asset/Proj4.PNG'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Tooltip from 'react-bootstrap/Tooltip'


const projects = [
  {
    name: 'Teamwork Ticketing Portal',
    pop: 'Back End',
    links: 'https://www.teamwork.com/launchpad/login?redirect_uri=http%3A%2F%2Flocalhost%3A8081%2Fauthentification&client_id=9c64033cbdd25c0d39d6ca97b6d493b1c4ac3cce',
    src: Icon1,
    alt: 'Teamwork API'
  },
  {
    name: 'Wordpress Website',
    pop: 'WordPress',
    links: 'https://caviarinthechalets.000webhostapp.com/',
    src: Icon2,
    alt: 'WordPress estate agency'
  },
  {
    name: 'Onepage Website',
    pop: 'Front End',
    links: 'https://kevinflex.github.io/WatchIt/',
    src: Icon3,
    alt: 'bootsrap website for event'
  },
  {
    name: 'CMS Website',
    pop: 'Website with its CMS',
    links: 'http://aloha-demo.id3i.fr/',
    src: Icon4,
    alt: 'website project'
  }
];

function ProjectList(props) {

  let [projectId, setprojectId] = useState(0)

  const title = projects[projectId].name
  const link = projects[projectId].links
  const src = projects[projectId].src
  const alt = projects[projectId].alt
  const pop = projects[projectId].pop

  const handleClick = function (e) {
    if (projectId < projects.length - 1) {
      setprojectId(projectId => projectId + 1)
    } else {
      setprojectId(projectId = 0)
    }
  }



  return (

    <Container>
      <h2 className="text-light">{title}</h2>
      <Row>
        <Col md={12}>
          <OverlayTrigger
            placement="top"
            overlay={
              <Tooltip id="tooltip">
                And here's some <strong>{pop}</strong> project.
              </Tooltip>
            }
          >

            <a href={link} target="_blank">
              <img className="project-picture" src={src} alt={alt} />
            </a>
          </OverlayTrigger>

        </Col>


      </Row>

      <Row className="justify-content-center my-3">
        <Button variant="outline-info" id="projectBtn" onClick={handleClick}>Next Project</Button>

      </Row>
    </Container>
  );
}


export default ProjectList;