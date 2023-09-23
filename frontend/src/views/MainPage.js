import React from "react";
import Carousel from "../components/carousel";
import "../assets/styles/bootstrap.scss";

import Header from "../components/header";
import Footer from "../components/footer";
const MainPage = () => {
  return (
    <>
      <Header />
      <Carousel />
      <Footer />
    </>
  );
};

export default MainPage;
