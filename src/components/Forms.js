import React from 'react'
import useInput from './hooks/input-hook'
import '../App.css';
import Form from 'react-bootstrap/Form'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import { useState } from 'react'

function Forms() {
  const { value: subject, bind: bindSubject, reset: resetSubject } = useInput('');
  const { value: text, bind: bindText, reset: resetText } = useInput('');

  const [validated, setValidated] = useState(false);

  const handleSubmit = (evt) => {
    evt.preventDefault();

    const form = evt.currentTarget;
    if (form.checkValidity() === false) {

      evt.preventDefault();
      evt.stopPropagation();
    }
    else {

      const url = 'mailto:kevin.vegiotti@gmail.com?subject='+subject+'&body='+text;

      window.open(url);

      alert('Submitting Infos successfully');
      resetSubject();
      resetText();
    }

    setValidated(true);

  }


  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <h1 className="text-light py-5">Contact Page</h1>

        <Form.Row>
          <Form.Group as={Col} md="4" controlId="validationCustom01">
            <Form.Label className="text-light">Name</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Jesus"
            />
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="validationCustom02">
            <Form.Label className="text-light">Country</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Brazil"
            />
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col} md="4" controlId="validationCustom03">
            <Form.Label className="text-light">
              Subject :
              </Form.Label>
            <Form.Control 
            required 
            type="text" 
            {...bindSubject} />

          </Form.Group>
          <Form.Group as={Col} md="8" controlId="validationCustom04">
            <Form.Label className="text-light">
              Text Area :
              </Form.Label>
            <Form.Control
            rows={2} 
            required
            type="textarea" 
            {...bindText} />

          </Form.Group>
        </Form.Row>
        <Form.Row  className="pb-5">
          <Form.Group>
            <Form.Check
              required
              className="text-light"
              label="Check me out"
              feedback="You must agree"
            />
          </Form.Group>
          <Button className="submitBtn ml-5" type="submit">Send mail</Button>
        </Form.Row>
    </Form>

  );
}

// href={`mailto:kevin.vegiotti@gmail.com?subject=${subject}&body=${text}`}

export default Forms;