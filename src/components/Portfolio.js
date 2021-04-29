import React from 'react';
import '../App.css';
import ProjectList from './ProjectList';
import TechnicalSkill from './TechnicalSkill';
import Button from 'react-bootstrap/Button';

function Portfolio() {
    return (
        <div>
            <section className="hero d-flex justify-content-center align-items-center text-light" id="home">
                <h1 className="lead">Hello, my name is Kevin and I love coding! <a style={{paddingLeft:3+ 'em'}} id="myWorkBtn" href="#myWork" variant="info">  See my work...</a></h1>
            </section>

            <section className="projectSlideShow">
                <div className="container py-2" id="myWork">

                    <div>
                        <ProjectList />
                    </div>
                </div>
            </section>


            {/* <row>
                <TechnicalSkill />
            </row> */}
        </div>
    );
}

export default Portfolio;