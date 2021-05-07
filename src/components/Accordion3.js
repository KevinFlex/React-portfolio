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
                                                A way of work in fact. Maybe the only one actually. Even in informatic we say "you never the first to ask". So <strong>help the other and ask when you don't know</strong>, my credo.
                                    </Card.Text>
                                            </Card.Body>
                                        </Card>
                                        <Card>
                                            <Card.Img className="aboutPic" variant="top" src={pic2} />
                                            <Card.Body>
                                                <Card.Title>Thinking on pluri-technical problem</Card.Title>
                                                <Card.Text>
                                                    As in technology everything's linked, the render, datas, infrastructure even worker's organisation.. So I try to <strong>stay open minded everyday</strong>.
                                                </Card.Text>
                                            </Card.Body>

                                        </Card>
                                        <Card>
                                            <Card.Img className="aboutPic" variant="top" src={pic3} />
                                            <Card.Body>
                                                <Card.Title>Flying ...</Card.Title>
                                                <Card.Text>
                                                    In paragliding, it depends on capricious weather but that'svery rewarding to lift ourself above clouds with a bag and some wire. 
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