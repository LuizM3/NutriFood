import React from "react";
import "../Sass/_footer.scss";
import { Navbar } from "react-bootstrap";

const rodaPe = (prop) => {
    return (
        <>
            <Navbar className="footer" fixed={prop.fixe} id="footer" expand="sm">
                <Navbar.Brand>@nutrifood</Navbar.Brand>
            </Navbar>
        </>
    );
}

export default rodaPe;