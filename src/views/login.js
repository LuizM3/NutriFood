import React from "react";
import Login from "../components/_componentLogin";
import Footer from "../components/_footer";

import "../Sass/_bootstrap.scss";

const Principal = () => {
    return(
        <>
            <Login />
            <Footer fixe="bottom"/>
        </>
    );
}

export default Principal;