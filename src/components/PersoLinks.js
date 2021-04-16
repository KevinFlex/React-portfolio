import React from 'react';
import '../App.css';

function PersoLinks(props) {
  const linkFrame = props.links && props.links.map((link) =>
    <div key={link.id}>
      <h3>{link.name}</h3>
      <p>{link.links}</p>
    </div>
  );

  return (
    <div>
      {linkFrame}
    </div>
);
}

const links = [
  {
    name:'TeamWork Ticketing Portal',
    links:'https://www.linkedin.com/in/kevin-vegiotti',
    id: 1
  },
  {
    name:'GitHub',
    links:'https://github.com/KevinFlex',
    id: 2
  },
  {
    name:'CodePen',
    links:'https://codepen.io/kevinflex',
    id: 3
  }
];


export default PersoLinks;

  