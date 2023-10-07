import React from "react";
import SuggestionsComp from "../components/suggestions";
import "../assets/styles/bootstrap.scss";
import Header from "../components/header";
import Footer from "../components/footer";

const Suggestions = () => {
  return (
    <>
      <Header />
      <SuggestionsComp />
      <Footer />
    </>
  );
};

export default Suggestions;
