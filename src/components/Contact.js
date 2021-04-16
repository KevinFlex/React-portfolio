import React from 'react';
import '../App.css';
import Forms from './Forms';
import PersoLinks from './PersoLinks';

function Contact() {
    return (
        <div>
            <h1>Contact Page</h1>
            <div>
                <Forms />
            </div>
            <row>
                <PersoLinks />
            </row>
        </div>
    );
}

export default Contact;