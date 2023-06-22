import React from "react";
import { Container,Row ,Col,NavLink} from "reactstrap";
function Footer(){
    return(
        <footer className="footer">
        <Container>
          <Row className="align-items-center">

            <Col size={12} md={6} sm={6}>
            <NavLink className="logo" to="/" >
               <h2 className="text-white">Rana</h2>
             </NavLink>
            </Col>
            <Col size={12} md={6} sm={6} className="text-center text-sm-end">
              <div className="social-icon Row">
              <a className="nav-link icon-border col-md-4 " href="https://linkedin.com/in/rana-magdi-4aa5401b0" target="_blank"><i class="fa-brands fa-linkedin-in icons "></i></a>
              <a className="nav-link icon-border col-md-4 " href="#"><i class="fa-brands fa-facebook-f icons"></i></a>
              <a className="nav-link icon-border col-md-4" href="#"><i class="fa-brands fa-instagram icons"></i></a>
              </div>
              <p> --Copyrights 2023--  All Rights Reserved here By Rana Magdi Mohammed </p>
            </Col>
          </Row>
        </Container>
      </footer>

    )
}
export default Footer;
