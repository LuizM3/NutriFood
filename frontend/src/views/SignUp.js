import React from "react";
import SignUpComp from "../components/signup";
import "../assets/styles/bootstrap.scss";
import Header from "../components/header";
const SignUp = () => {
  return (
    <>
      <Header />
      <SignUpComp />
    </>
  );
};

export default SignUp;
