import React from "react";
import ReviewsComp from "../components/reviews";
import "../assets/styles/bootstrap.scss";
import Header from "../components/header";
import Footer from "../components/footer";

const Reviews = () => {
  return (
    <>
      <Header />
      <ReviewsComp />
      <Footer />
    </>
  );
};

export default Reviews;
