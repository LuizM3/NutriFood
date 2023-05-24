import React from 'react';
import Carousel from "react-bootstrap/Carousel";
import "../Sass/_carousel.scss";

const Carrossel = () => {
  return (
    <Carousel fade className='carousel'>
      <Carousel.Item id="day1">
        <h1 className='tittleCar'>Bem-vindo</h1>
      </Carousel.Item>

      <Carousel.Item id="day2">
      <h1>O que achou da comida?</h1>
      </Carousel.Item>

      <Carousel.Item id="day3">
      <h1>Sugira uma refeição</h1>
      </Carousel.Item>

      <Carousel.Item id="day4">
      <h1>Veja o cardápio do dia</h1>
      </Carousel.Item>

      <Carousel.Item id="day5">
      <h1>Contate-nos</h1>
      </Carousel.Item>
    </Carousel>
  );
}

export default Carrossel;