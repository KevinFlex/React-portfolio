import React from 'react'
import '../App.css'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'
import pic1 from '../asset/kno1.PNG'
import pic2 from '../asset/kno2.PNG'
import pic3 from '../asset/kno3.PNG'

function Accordion2() {
    return (

        <Container>
            <Row className="pb-3">
                <Col md={12}>
                    <Accordion>
                        <Card>
                            <Card.Header>
                                <Accordion.Toggle as={Card.Header} variant="link" eventKey="0">
                                    Things that I know
                                 </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="0">
                                <Card.Body>
                                    <CardDeck>
                                        <Card>
                                            <Card.Img className="aboutPic" variant="top" src={pic1} />
                                            <Card.Body>
                                                <Card.Title>Front End Frameworks</Card.Title>
                                                <Card.Text>
                                                    Essentially, I use <strong>Vue.js</strong>, quite efficient in fact but I can developp on react, angular and many other..
                                                </Card.Text>
                                            </Card.Body>
                                        </Card>
                                        <Card>
                                            <Card.Img className="aboutPic" variant="top" src={pic2} />
                                            <Card.Body>
                                                <Card.Title>Back End Framework</Card.Title>
                                                <Card.Text>
                                                    On the great battle of backend Framework I decided to choose both ! Lot of <strong>Net Framework</strong> during company time and JS on peronal project.
                                                </Card.Text>
                                            </Card.Body>

                                        </Card>
                                        <Card>
                                            <Card.Img className="aboutPic" variant="top" src={pic3} />
                                            <Card.Body>
                                                <Card.Title>Industrial engineering</Card.Title>
                                                <Card.Text>
                                                    From the <a href="https://www.cesi.fr/cesi-ecole-ingenieurs/" target="_blank">Cesi</a> engineering school I have worked several year as <strong>electrical</strong> and <strong>mechanical</strong> conceptor. So jump inside a ton of technical documents doesn't scared me.
                                                </Card.Text>
                                            </Card.Body>

                                        </Card>
                                    </CardDeck>
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                    </Accordion>
                </Col>
            </Row>

        </Container>

    )

}

export default Accordion2;