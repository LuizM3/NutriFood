import React from "react";
import Header from "../components/_header";
import Footer from "../components/_footer";
import SignUp from "../components/_componentSignUp";

import "../Sass/_bootstrap.scss";

const Principal = () => {
    return(
        <>
            <Header />
        
            <SignUp />

            <Footer />
        </>
    );
}

export default Principal;