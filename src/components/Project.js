import React, { useState, useEffect } from 'react';
import '../App.css';
import ProjectList from './ProjectList';

function Project(props) {
    const [id, setId] = useState(0)

    const handleClick = function (e) {
      e.preventDefault()
      setId(id => id + 1);
    }


    return (
      <div>
        <row>
          <ProjectList />
        </row>
        <row>
          <button onClick={handleClick}>
            Another project
          </button>
        </row>
      </div>
    );
}


export default Project;