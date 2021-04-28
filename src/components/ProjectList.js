import React from 'react';
import '../App.css';
import { useState } from 'react';
import Icon1 from '../asset/Proj1.PNG'
import Icon2 from '../asset/Proj2.PNG'
import Icon3 from '../asset/Proj3.PNG'




const projects = [
  {
    name: 'Teamwork Ticketing Portal',
    date: 'January 2021',
    links: '#',
    src: Icon1,
    alt: 'Teamwork API'
  },
  {
    name: 'Wordpress Website',
    date: 'December 2020',
    links: 'https://caviarinthechalets.000webhostapp.com/',
    src: Icon2,
    alt: 'WordPress estate agency'
  },
  {
    name: 'Onepage Website',
    date: 'January 2021',
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

  const nextProjectBtn = 'Next project'
  const handleClick = function (e) {
    if (projectId < projects.length - 1) {
      setprojectId(projectId => projectId + 1)
    } else {
      setprojectId(projectId = 0)
    }
  }


  return (
    <div>
      <h2>{title}</h2>
      <row>
        <a href={link} target="_blank">
        <img className="project-picture" src={src} alt={alt} />
        </a>
      </row>

      <row>
        <button id="projectBtn" onClick={handleClick}>Next Project</button>

      </row>
    </div>
  );
}


export default ProjectList;

