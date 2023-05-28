import React from "react";
import SignUp from "../components/_componentSignUp";
import Footer from "../components/_footer";

import "../Sass/_bootstrap.scss";

const cadastro = () => {
    return(
        <>
            <SignUp />
            <Footer fixe="bottom"/>
        </>
    );
}

export default cadastro;