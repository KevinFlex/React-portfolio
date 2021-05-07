import React from 'react'
import '../App.css'
import { useState } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'
import Button from 'react-bootstrap/Button'
import Fade from 'react-bootstrap/Fade'
import do1 from '../asset/do2.PNG'
import do2 from '../asset/do1.PNG'
import img from '../asset/picPerso.jpg'

function Accordion1() {
    const [open, setOpen] = useState(false);


    return (

        <Container >
            <Row>
                <h1 className="text-light py-5">About Page</h1>

                <Button
                    onClick={() => setOpen(!open)}
                    aria-controls="music-fade"
                    aria-expanded={open}
                    variant="outline-success"
                    className="my-5 ml-auto mr-2"
                >
                    Some music reading ?
                </Button>
                <Fade in={open}>
                    <div className="my-auto"><iframe src="https://open.spotify.com/embed/playlist/6F3lpzQNpBG44xPEwxPfDH" width="300" height="80" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe></div>

                </Fade>
            </Row>
            <Row className="pb-3">
                <Col md={9}>
                    <Accordion>
                        <Card>
                            <Card.Header>
                                <Accordion.Toggle as={Card.Header} variant="link" eventKey="1">
                                    Things I'm doing
                                 </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="1">
                                <Card.Body>
                                    <CardDeck>
                                        <Card>
                                            <Card.Img className="aboutPic" variant="top" src={do1} />
                                            <Card.Body>
                                                <Card.Title>Work as full stack developper</Card.Title>
                                                <Card.Text>
                                                    Integrated in apprenticeship in small company based in <strong>Brest</strong>, France, as developper.
                                                    I work on several project as back end or front end to enlarge my abilities on many framewworks.
                                    </Card.Text>
                                            </Card.Body>
                                        </Card>
                                        <Card>
                                            <Card.Img className="aboutPic" variant="top" src={do2} />
                                            <Card.Body>
                                                <Card.Title>Studying within OpenClassrooms</Card.Title>
                                                <Card.Text>
                                                    For 2 years formation as <strong>full stack</strong> developer. We work on many real application hosted online with professional advises.
                                                </Card.Text>
                                            </Card.Body>

                                        </Card>
                                    </CardDeck>
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                    </Accordion>
                </Col>
                <Col md={3}>
                    <Card
                        bg="info"
                        text="light"
                        className="mb-2">

                            <Card.Header><Card.Img className="aboutPic1 rounded" variant="top" src={img} />
                            </Card.Header>
                                <Card.Body>
                                    <Card.Title> Hi ! My name's Kevin </Card.Title>
                                    <Card.Text>
                                        I'm french -yep, no one's perfect- live in Britanny and had recently traded my engineer job as conceptor to start developer career of application... Quite simillar actually !
                            </Card.Text>
                                </Card.Body>
                    </Card>

                </Col>
            </Row>

        </Container>

    )

}

export default Accordion1;