import React from 'react';
import { Card, Col } from 'react-bootstrap';

export default function CardRazon({ imagen, titulo, descripcion }) {
  return (
    <Col md={4} className="mb-4">
      <Card className="h-100">
        <Card.Img variant="top" src={imagen} alt={titulo} />
        <Card.Body>
          <Card.Title>{titulo}</Card.Title>
          <Card.Text>{descripcion}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
}
