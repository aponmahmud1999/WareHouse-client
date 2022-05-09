import React from 'react';
import { Col, Row } from 'react-bootstrap';
import img from './66528363_2252037601577958_572761230683406336_n.jpg'
const About = () => {
    return (
        <div style={{minHeight:'100vh'}} className='container'>
            <Row xs={1} md={2} className='mt-5 mb-5 border rounded p-3'>
    <Col><img src={img} className='w-50 h-100' alt="" srcset="" /></Col>
    <Col className='shadow border rounded-2'>
            <h1>About Me</h1>
        <h3>Name: Apon Mahmud</h3>
        <h5>Bangladesh Army University of Science & Technology, Saidpur.</h5>
    </Col>
  </Row>
        </div>
    );
};

export default About;