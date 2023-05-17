import React from "react";
import Header from "../components/header";
import Carousel from "../components/carousel";
import Section2 from "../components/funcionamento";
import Footer from "../components/footer"

import "../Sass/bootstrap.scss";

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