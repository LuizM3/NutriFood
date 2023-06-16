import React from "react";
import "../Sass/_footer.scss";
import { Navbar } from "react-bootstrap";

const rodaPe = () => {
    return (
        <>
            <Navbar className="footer" static="bottom" id="footer" expand="sm">
                <Navbar.Brand id="marca">@nutrifood</Navbar.Brand>
            </Navbar>
        </>
    );
}

export default rodaPe;