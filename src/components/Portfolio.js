import React from 'react';
import '../App.css';
import ProjectList from './ProjectList';
import TechnicalSkill from './TechnicalSkill';

function Portfolio() {
    return (
        <div>
            <section class="hero d-flex justify-content-center align-items-center text-light">
                <h1 class="lead">Hello, my name is Kevin and I love coding!</h1>
            </section>

            <section>
                <div class="container py-5">
                    <h2 class="text-center">My work</h2>
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