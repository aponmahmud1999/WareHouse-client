import React from 'react';
import { Accordion, Col, Container, Row } from 'react-bootstrap';

const Extra2 = () => {
    return (
        <div className='mb-5'>
           <Container>
  <Row  xs={1} md={2}>
    <Col className='w-50 h-50'><img className='w-75 h-75' src="https://images.unsplash.com/photo-1579983093084-82213ea15691?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt="" srcset="" /></Col>
    <Col className='mt-md-5 mt-lg-5 mb-2'>
    <h3>Frequently Asked Questions:</h3>
    <Accordion>
  <Accordion.Item eventKey="0">
    <Accordion.Header><strong>What are good questions to ask about phones?</strong></Accordion.Header>
    <Accordion.Body><strong>
    Smartphones have become the handheld of choice due to their many capabilities, but there's still a use for less-capable basic cell phones.
    </strong></Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="1">
    <Accordion.Header><strong>Why mobile is used?</strong></Accordion.Header>
    <Accordion.Body>
      <strong>Why mobile is used?
Mobile phones are used for a variety of purposes, such as keeping in touch with family members, for conducting business, and in order to have access to a telephone in the event of an emergency</strong>
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="2">
    <Accordion.Header><strong>Why mobile is invented?</strong></Accordion.Header>
    <Accordion.Body><strong>
    Cooper wanted people to have freedom to talk on the phone away from their cars. So in reaction, he and Motorola embarked on a project to create a more portable device.
    </strong></Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="3">
    <Accordion.Header><strong>How mobile phone is useful to a student?</strong></Accordion.Header>
    <Accordion.Body><strong>
    How mobile phone is useful to a student?
Cellular phones help them in managing their time. They can set alarms and reminders etc. Cellular phones are also beneficial for students because it helps them using various learning applications as well as insta
    </strong></Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="4">
    <Accordion.Header><strong>When was the first Internet phone?</strong></Accordion.Header>
    <Accordion.Body><strong>
The first mobile phone with Internet connectivity was the Nokia 9000 Communicator. It was launched in Finland back in 1996, but in truth the viability of accessing the Internet was at first limited by very high prices by the operators
    </strong></Accordion.Body>
  </Accordion.Item>
</Accordion></Col>
  </Row> 
  </Container>
        </div>
    );
};

export default Extra2;