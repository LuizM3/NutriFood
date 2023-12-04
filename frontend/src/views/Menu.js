import React from "react";
import MenuComp from "../components/menu";
import "../assets/styles/bootstrap.scss";
import Header from "../components/header";
import Footer from "../components/footer";

const Menu = () => {
  return (
    <>
      <Header />
      <MenuComp />
      <Footer />
    </>
  );
};

export default Menu;
