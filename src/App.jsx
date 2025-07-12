//Trabajo hecho por Benjamin Andres Bravo Campaña
//Carrera: Analista Programador
import React from 'react';
import { Container, Row, Col, Button, Image } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import CardRazon from './components/CardRazon';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Carrusel from './components/carrusel';
import sonic1 from './assets/img/sonic1.jpg';
import sonic2 from './assets/img/sonic2.png';
import sonic3 from './assets/img/sonic3.png';
import sonicemote from './assets/img/sonicemote.gif';
import soniccorriendo from './assets/img/soniccorriendo.gif';

function App() {
  return (
    <div className="app-background">
      <header>
        <Navbar />
      </header>
      
      <Container className="my-5">
        <div className="titulo-principal text-center py-5">
          <Row className="justify-content-center">
            <Col lg={10} md={12}>
              <h1 className="display-3 mb-4">¿Por qué no me gusta Sonic?</h1>
              <div className="d-flex justify-content-center gap-3 mt-4">
                <Button href="#razonesdeodio" variant="primary" className="ver-razones">
                  Ver Razones <i className="las la-kiwi-bird"></i>
                </Button>
                <Button href="#vercreador" variant="secondary" className="ver-creador">
                  Ver Creador de la página <i className="las la-user"></i>
                </Button>
              </div>
            </Col>
          </Row>
        </div>

        <div className="sonic-impacto text-center py-5">
          <h2 className="display-5 mb-5">
            <i className="las la-exclamation"></i>¿Qué es Sonic y cuál ha sido su impacto? <i className="las la-exclamation"></i>
          </h2>
          <Row>
            <Col md={6}>
              <h3 className="mb-4">
                Sonic, el erizo azul <i className="las la-running"></i>
              </h3>
              <p>
                Creado por SEGA, Sonic the Hedgehog debutó en 1991 como el antagonista de Mario para la consola SEGA Genesis. Con su velocidad característica, Sonic rápidamente se ganó el corazón de los jugadores y se convirtió en el ícono más grande de la compañía japonesa.
              </p>
              <Image src={sonicemote} rounded className="gif-sonic float-start" alt="sonic1" />
            </Col>
            <Col md={6}>
              <h3 className="mb-4">
                El impacto de Sonic en la cultura de videojuegos <i className="las la-gamepad"></i>
              </h3>
              <p>
                Sonic ha sido mucho más que solo un videojuego; se convirtió en una franquicia global, con cómics, series de televisión y películas. A lo largo de los años, ha enfrentado altibajos en la crítica, pero ha mantenido una base de seguidores leales que siguen defendiendo su legado.
              </p>
              <Image src={soniccorriendo} rounded className="gif-sonic float-end" alt="sonic2" />
            </Col>
          </Row>
        </div>

        <section id="razonesdeodio" className="my-5">
          <h3 className="text-center mb-4">Razones por las que no me gusta Sonic</h3>
          <Row className="text-center">
            <CardRazon
              imagen={sonic1}
              titulo="No saben cómo manejar la saga"
              descripcion="Sega no tiene una dirección clara para Sonic. Saltan entre estilos 2D, 3D y mundos abiertos sin consistencia."
            />
            <CardRazon
              imagen={sonic2}
              titulo="Más títulos malos que buenos"
              descripcion="Sonic tiene muchos juegos mal recibidos. La calidad es inconsistente y la crítica suele ser negativa."
            />
            <CardRazon
              imagen={sonic3}
              titulo="No tiene identidad propia"
              descripcion="El diseño de Sonic cambia con frecuencia. Sega no logra mantener una imagen coherente del personaje."
            />
          </Row>
        </section>

        <Container className="text-center my-5">
          <h4 className="text-center mb-4">Top juegos malos según yo</h4>
          <Carrusel />
        </Container>
      
      </Container>
      <Footer />
    </div>
  );
}
export default App;
