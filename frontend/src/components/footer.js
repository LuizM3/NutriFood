import React from "react";
import "../assets/styles/footer.scss";
import { Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const FooterConst = () => {
  return (
    <>
      <Navbar className="footer" static="bottom" id="footer" expand="sm">
        <Navbar.Brand className="ft-brand">
          <Link to="https://www.instagram.com/bryanzuc.co/" target="_blank">
            <ion-icon name="logo-instagram" className="ic-footer"></ion-icon>
          </Link>

          <Link
            to="https://www.facebook.com/profile.php?id=100087361385295/"
            target="_blank"
          >
            <ion-icon name="logo-facebook" className="ic-footer"></ion-icon>
          </Link>

          <Link to="https://twitter.com/" target="_blank">
            <ion-icon name="logo-twitter" className="ic-footer"></ion-icon>
          </Link>
        </Navbar.Brand>
        <Navbar.Brand className="ft-brand"><b>@nutrify</b></Navbar.Brand>

        <Navbar.Brand className="ft-brand">
          <Link to="https://github.com/bryantoken" target="_blank">
            <ion-icon name="logo-github" className="ic-footer"></ion-icon>
          </Link>

          <Link to="https://linkedin.com/in/bryanzucoborges" target="_blank">
            <ion-icon name="logo-linkedin" className="ic-footer"></ion-icon>
          </Link>

          <Link to="https://www.paypal.com/" target="_blank">
            <ion-icon name="logo-paypal" className="ic-footer"></ion-icon>
          </Link>
        </Navbar.Brand>
      </Navbar>
    </>
  );
};

export default FooterConst;
