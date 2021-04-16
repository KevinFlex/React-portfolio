import React from 'react';
import '../App.css';
import Project from './Project';
import TechnicalSkill from './TechnicalSkill';

function Portfolio() {
    return (
        <div>
            <h1>My Creation</h1>
            <row>
                <Project />
            </row>
            {/* <row>
                <TechnicalSkill />
            </row> */}
        </div>
    );
}

export default Portfolio;