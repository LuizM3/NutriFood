import React from "react";
import "../Sass/_footer.scss";
import { Navbar } from "react-bootstrap";

const rodaPe = () => {
    return (
        <>
            <Navbar className="footer" sticky="bottom" id="footer" expand="sm">
                <Navbar.Brand>@nutrifood</Navbar.Brand>
            </Navbar>
        </>
    );
}

export default rodaPe;