import React from 'react';
import '../App.css';
import { useState } from 'react';
import Icon1 from '../asset/Proj1.PNG'
import Icon2 from '../asset/Proj2.PNG'
import Icon3 from '../asset/Proj3.PNG'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Popover from 'react-bootstrap/Popover';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';


const projects = [
  {
    name: 'Teamwork Ticketing Portal',
    pop: 'Back End',
    links: '#',
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
  }
];

function ProjectList(props) {

  let [projectId, setprojectId] = useState(0)

  const title = projects[projectId].name
  const link = projects[projectId].links
  const src = projects[projectId].src
  const alt = projects[projectId].alt
  const pop= projects[projectId].pop


  const nextProjectBtn = 'Next project'
  const handleClick = function (e) {
    if (projectId < projects.length - 1) {
      setprojectId(projectId => projectId + 1)
    } else {
      setprojectId(projectId = 0)
    }
  }
  
  const popover = (
  <Popover id="popover-basic">
    <Popover.Content>
      And here's some <strong>{pop}</strong> project.
    </Popover.Content>
  </Popover>
);


  return (
    <Container>
      <h2 className="text-light">{title}</h2>
      <Row>
        <Col md={12}>      
        <OverlayTrigger trigger="click" placement="top" overlay={popover}>  
        <a href={link} target="_blank">
          <img className="project-picture" src={src} alt={alt} />
        </a>
        </OverlayTrigger>
        </Col>

      </Row>

      <Row className="justify-content-center my-3">
        <Button variant="outline-primary" id="projectBtn" onClick={handleClick}>Next Project</Button>

      </Row>
    </Container>
  );
}


export default ProjectList;