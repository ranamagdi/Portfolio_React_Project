import React from "react";
import { Col,Row } from "reactstrap";

function Newsletter (){


  return (
    <div>
     <Col md={12}>
        <div className="newsletter-bx">

          <Row>
            <Col lg={12} md={6} xl={5}>
              <h3>See My Projects At Once<br></br>& leave Here Your E-mail</h3>
            </Col>
            <Col md={6} xl={7}>
              <form >
                <div className="new-email-bx">
                  <input  type="email"  placeholder="Email Address" />
                  <button type="submit">Submit</button>
                </div>
              </form>
            </Col>
          </Row>
          </div>
      </Col>
      </div>

  )
}
export default Newsletter;
