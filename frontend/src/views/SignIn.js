import React from "react";
import SignInComp from "../components/signin";
import "../assets/styles/bootstrap.scss";
import Header from "../components/header";

const SignIn = () => {
  return (
    <>
      <Header />
      <SignInComp />
    </>
  );
};

export default SignIn;
