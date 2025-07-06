import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import benjaminbravo from '../assets/img/benjaminbravo.png';

export default function Footer() {
  return (
    <footer id="vercreador" className="bg-dark text-white pt-4 pb-2 mt-5">
      <Container className="text-center text-md-start">
        <Row>
          <Col md={4} className="mb-3">
            <h1>
              Creador: Benjamin Bravo <i className="las la-user-tie"></i>
            </h1>
            <Image src={benjaminbravo} alt="foto de perfil" thumbnail />
          </Col>
        </Row>
        <Row>
          <Col md={12} className="mb-3 text-center">
            <h1>Entrega de trabajo final para la evaluación 1</h1>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
