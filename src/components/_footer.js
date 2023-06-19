import React from "react";
import "../Sass/_footer.scss";
import { Navbar} from "react-bootstrap";
import { Link } from "react-router-dom";

const rodaPe = () => {
    return (
        <>
            <Navbar className="footer" static="bottom" id="footer" expand="sm">
                <Navbar.Brand className="ft-brand">
                
                <Link to="https://www.instagram.com/bryanzuc.co/"><ion-icon name="logo-instagram" className="ic-footer"></ion-icon></Link>
                
                <Link to="https://www.facebook.com/profile.php?id=100087361385295/"><ion-icon name="logo-facebook" className="ic-footer"></ion-icon></Link>
                
                <Link to="https://twitter.com/"><ion-icon name="logo-twitter" className="ic-footer"></ion-icon></Link>
                </Navbar.Brand>
                <Navbar.Brand className="ft-brand">
                    @nutrify 
                    </Navbar.Brand>

                    <Navbar.Brand className="ft-brand">
                    
                    <Link to="https://github.com/bryantoken"><ion-icon name="logo-github" className="ic-footer"></ion-icon></Link>
                    
                    <Link to="https://linkedin.com/in/bryanzucoborges"><ion-icon name="logo-linkedin" className="ic-footer"></ion-icon></Link>
                    
                    <Link to="https://www.paypal.com/"><ion-icon name="logo-paypal" className="ic-footer"></ion-icon></Link>
                    </Navbar.Brand>
            </Navbar>
        </>
    );
}

export default rodaPe;