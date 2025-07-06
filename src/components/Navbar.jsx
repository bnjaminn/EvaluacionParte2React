import React from 'react';
import { Navbar, Nav, Container, Image } from 'react-bootstrap';
import ringsonic from '../assets/img/ringsonic.gif';

export default function NavBar() {
  return (
    <Navbar expand="lg" bg="light" variant="light" sticky="top">
      <Container fluid>
        <Navbar.Brand href="#">
          ¿Por qué no me gusta Sonic? <i className="lab la-hotjar"></i>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#">¿Por qué no me gusta Sonic?</Nav.Link>
            <Nav.Link href="#razonesdeodio">Razones de por qué no me gusta</Nav.Link>
          </Nav>
          <Image
            src={ringsonic}
            alt="Ring Sonic"
            width={40}
            height={40}
            rounded
            className="ms-auto"
          />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
