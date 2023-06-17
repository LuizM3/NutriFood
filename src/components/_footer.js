import React from "react";
import "../Sass/_footer.scss";
import { Navbar } from "react-bootstrap";

const rodaPe = () => {
    return (
        <>
            <Navbar className="footer" static="bottom" id="footer" expand="sm">
                <Navbar.Brand className="ft-brand">
                <ion-icon name="logo-instagram" className="ic-footer"></ion-icon>
                <ion-icon name="logo-facebook" className="ic-footer"></ion-icon>
                <ion-icon name="logo-twitter" className="ic-footer"></ion-icon>
                </Navbar.Brand>
                <Navbar.Brand className="ft-brand">
                    @nutrifood 
                    </Navbar.Brand>

                    <Navbar.Brand className="ft-brand">
                    <ion-icon name="logo-github" className="ic-footer"></ion-icon>
                    <ion-icon name="logo-linkedin" className="ic-footer"></ion-icon>
                    <ion-icon name="logo-paypal" className="ic-footer"></ion-icon>
                    </Navbar.Brand>
            </Navbar>
        </>
    );
}

export default rodaPe;