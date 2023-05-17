import React from 'react';
import Carousel from "react-bootstrap/Carousel";

import "../Sass/carousel.scss";

const Carrossel = () => {
  return (
    <Carousel fade>
      <Carousel.Item>
        <div className="divCarousel d-grid justify-content-center position-relative" id='day1'>
        <h1>Segunda-feira</h1>
        </div>
      </Carousel.Item>

      <Carousel.Item>
        <div className="divCarousel d-grid justify-content-center position-relative" id='day2'>
          <h1>Terça-feira</h1>
        </div>
      </Carousel.Item>

      <Carousel.Item>
        <div className="divCarousel d-grid justify-content-center position-relative" id='day3'>
          <h1>Quarta-feira</h1>
        </div>
      </Carousel.Item>

      <Carousel.Item>
        <div className="divCarousel d-grid justify-content-center position-relative" id='day4'>
          <h1>Quinta-feira</h1>
        </div>
      </Carousel.Item>

      <Carousel.Item>
        <div className="divCarousel d-grid justify-content-center position-relative" id='day5'>
          <h1>Sexta-feira</h1>
        </div>
      </Carousel.Item>
    </Carousel>
  );
}

export default Carrossel;