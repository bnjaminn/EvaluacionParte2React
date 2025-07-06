import React from 'react';
import { Carousel } from 'react-bootstrap';
import sonic2006 from '../assets/img/sonic 2006.jpg';
import sonicforces from '../assets/img/sonicforces.jpg';
import sonicboom from '../assets/img/sonic boom.jpg';

function Carrusel() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={sonic2006}
          alt="Sonic 2006"
          style={{ height: "500px", objectFit: "contain" }}
        />
        <Carousel.Caption>
          <div className="p-3 mb-2 bg-dark text-white">
            Top 3: Juego mal optimizado y bugueado con una historia rara
          </div>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={sonicforces}
          alt="Sonic Forces"
          style={{ height: "500px", objectFit: "contain" }}
        />
        <Carousel.Caption>
          <div className="p-3 mb-2 bg-dark text-white">
            Top 2: Juego MUY fácil de jugar y con una historia aburrida
          </div>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={sonicboom}
          alt="Sonic Boom"
          style={{ height: "500px", objectFit: "contain" }}
        />
        <Carousel.Caption>
          <div className="p-3 mb-2 bg-dark text-white">
            Top 1: El peor juego de Sonic sin dudas
          </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Carrusel;
