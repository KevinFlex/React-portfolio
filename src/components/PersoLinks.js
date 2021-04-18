import React from 'react';
import '../App.css';
import persolink1 from '../asset/linkedin.png'
import persolink2 from '../asset/codepen.png'
import persolink3 from '../asset/github.png'

function PersoLinks() {

  return (
    <div>    
      <a href="https://www.linkedin.com/in/kevin-vegiotti" target="_blank">
        <img src={persolink1} className="persoLinkIcon" />
      </a>
      <a href="https://codepen.io/kevinflex" target="_blank">
        <img src={persolink2} className="persoLinkIcon" />
      </a>    
      <a href="https://github.com/KevinFlex" target="_blank">
        <img src={persolink3} className="persoLinkIcon" />
      </a>
    </div >

  );
}


export default PersoLinks;

