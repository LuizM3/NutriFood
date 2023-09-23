import React from "react";
import ContactComp from "../components/contact";
import "../assets/styles/bootstrap.scss";

import Header from "../components/header";
import Footer from "../components/footer";
const Contact = () => {
  return (
    <>
      <Header />
      <ContactComp />
      <Footer />
    </>
  );
};

export default Contact;
