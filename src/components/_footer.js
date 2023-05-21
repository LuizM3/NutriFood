import React from "react";
import "../Sass/_footer.scss";
import { Navbar } from "react-bootstrap";

const rodaPe = () => {
    return (
        <>
     <Navbar fixed="bottom" className="footer" id="footer" expand="sm">
      <Navbar.Brand>@nutrifood</Navbar.Brand>
    </Navbar>
        </>

    );
}

export default rodaPe;