import React from 'react';
import '../App.css';
import Forms from './Forms';
import PersoLinks from './PersoLinks';

function Contact() {
    return (
        <div>
            <section className="form">
            <h1>Contact Page</h1>
            <div>
                <Forms />
            </div>
            </section>
            <section className="persoLink">
            <row>
                <PersoLinks />
            </row>
            </section>
        </div>
    );
}

export default Contact;