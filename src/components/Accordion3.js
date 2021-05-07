import React from 'react'
import '../App.css'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'
import pic1 from '../asset/lov1.PNG'
import pic2 from '../asset/lov2.PNG'
import pic3 from '../asset/lov3.PNG'

function Accordion3() {
    return (

        <Container>
            <Row className="pb-3">
                <Col md={12}>
                    <Accordion>
                        <Card>
                            <Card.Header>
                                <Accordion.Toggle as={Card.Header} variant="link" eventKey="0">
                                    Things I love
                                 </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="0">
                                <Card.Body>
                                    <CardDeck>
                                        <Card>
                                            <Card.Img className="aboutPic" variant="top" src={pic1} />
                                            <Card.Body>
                                                <Card.Title>Team work</Card.Title>
                                                <Card.Text>
                                                    This is a wider card with supporting text below as a natural lead-in to
                                                    additional content. This content is a little bit longer.
                                    </Card.Text>
                                            </Card.Body>
                                        </Card>
                                        <Card>
                                            <Card.Img className="aboutPic" variant="top" src={pic2} />
                                            <Card.Body>
                                                <Card.Title>Thinking on pluri-technical problem</Card.Title>
                                                <Card.Text>
                                                    This card has supporting text below as a natural lead-in to additional
                                      content.{' '}
                                                </Card.Text>
                                            </Card.Body>

                                        </Card>
                                        <Card>
                                            <Card.Img className="aboutPic" variant="top" src={pic3} />
                                            <Card.Body>
                                                <Card.Title>Flying ...</Card.Title>
                                                <Card.Text>
                                                    This card has supporting text below as a natural lead-in to additional
                                      content.{' '}
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

export default Accordion3;