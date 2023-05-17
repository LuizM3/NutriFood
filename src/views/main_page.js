import React from "react";
import Header from "../components/_header";
import Carousel from "../components/_carousel";
import Section2 from "../components/_main";
import Footer from "../components/_footer"

import "../Sass/_bootstrap.scss";

const Principal = () => {
    return(
        <>
            <Header />
        
            <Carousel />

            <Section2 />

            <Footer />
        </>
    );
}

export default Principal;