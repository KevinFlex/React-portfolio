import React from 'react';
import '../App.css';
import { useState, useEffect } from 'react';

function ProjectList(props) {
  const projectFrame = props.projects && props.projects.map((project) =>
    <div key={project.id}>
      <h3>{project.name}</h3>
      <p>{project.links}</p>
      {/* <img {project.img} /> */}
    </div>
  );

  return (
    <div>
      {projectFrame}
    </div>
);
}

const projects = [
  {
    name:'TeamWork Ticketing Portal',
    date:'January 2021',
    links:'',
    img:'',
    jobType:[],
    id: 1
  },
  {
    name:'WordPress Website',
    date:'December 2020',
    links:'',
    img:'',
    jobType:[],
    id: 2
  },
  {
    name:'OnePage Website',
    date:'January 2021',
    links:'https://kevinflex.github.io/WatchIt/',
    img:'',
    jobType:[],
    id: 3
  }
];


export default ProjectList;

  