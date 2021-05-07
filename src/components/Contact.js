import React from 'react'
import '../App.css'
import Forms from './Forms'
import PersoLinks from './PersoLinks'
import Container from 'react-bootstrap/Container'

function Contact() {
    return (
        <div className="contactPage">
            <Container>
            <section className="contactForm">
                <div>
                    <Forms />
                </div>
            </section>
            <section className="persoLink">
                <PersoLinks />
            </section>
            </Container>
        </div>
    );
}

export default Contact;