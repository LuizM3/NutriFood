import React from "react";
import Header from "../components/_header";
import Footer from "../components/_footer";
import Login from "../components/_componentLogin";

import "../Sass/_bootstrap.scss";

const Principal = () => {
    return(
        <>
            <Header />
        
            <Login />

            <Footer />
        </>
    );
}

export default Principal;