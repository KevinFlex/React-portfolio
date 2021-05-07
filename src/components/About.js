import React from 'react'
import '../App.css'
import Accordion1 from './Accordion1'
import Accordion2 from './Accordion2'
import Accordion3 from './Accordion3'

function About() {
    return (
        <div className="about">
            <section>
                <Accordion1 />
            </section>            
            <section>
                <Accordion2 />
            </section>            
            <section>
                <Accordion3 />
            </section>
        </div>
    );
}

export default About;