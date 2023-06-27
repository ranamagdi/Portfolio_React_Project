import React from "react";
import { Container,Row,Col } from  "reactstrap"
import Typewriter from 'typewriter-effect'
import { ArrowRightCircle } from 'react-bootstrap-icons';
import TrackVisibility from 'react-on-screen';
import 'animate.css';



function Header(){

    return(
        <div className="main" id="main-header">
           <Container>
           <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
          <TrackVisibility>
              {({ isVisible }) =>

              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
          <span className="portfolio">Welcome All In My Portfolio </span>
          <h1>Hi! I'm Rana,
            <Typewriter
                options={{
                    autoStart:true,
                    loop:true,
                    delay:50,
                    strings:["Fullstack Developer","FrontEnd Developer","BackEnd Developer"]
                }
                }
                />

          </h1>

                  <p>My fullname is Rana Magdi Mohammed. I'm 23 years old. I'm graduated from faculty of engineering Ain Shams University.I need to be FullStack developer.And I'm interst to learn new technologies. </p>
                  <button id="to-end">Let's Connect<span> <ArrowRightCircle size={25} /></span></button>
                  </div>
                  }

           </TrackVisibility>
          </Col>

          <Col xs={12} md={6} xl={5}>
          <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img src='images/astronout.png' alt="astronout"/>
                  </div>
              }

           </TrackVisibility>
          </Col>
        </Row>

           </Container>

        </div>
    )
}
export default Header;
