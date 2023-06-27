import React from "react";
import { NavLink } from  "reactstrap"
import { Link } from "react-scroll";



function NavBar(){


  function scrollFunction() {// When the user scrolls down 50px from the top of the document, show the button
    if (document.body.scrollTop > 40 ||
      document.documentElement.scrollTop > 40) {//window.pageYOffset>50 //3shan t7seb 3melt scroll 2d eh
        document.querySelector(".navScroll").style.backgroundColor = "#10052d";


     }
     else {
      document.querySelector(".navScroll").style.backgroundColor = "rgba(0, 0, 0, 0)";


     }

   }
   window.onscroll = function() //window means open window in browser
   {
    scrollFunction();
   }



    return(

      <div className="header">

      <nav className="navbar navbar-expand-lg fixed-top  navScroll ">
        <div className="container">
        <NavLink className="navbar-brand logo" to="/" >
        <h2 className="text-white">Rana</h2>
        </NavLink>

            <button class="navbar-toggler bg-light"  type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse " id="navbarSupportedContent">
          <ul className="navbar-nav ">
            <li className="nav-item ">
              <Link className="nav-link link-nav first_nav" activeClass="active"  to="main-header" spy={true}   smooth={true} offset={20} duration={500} >Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link link-nav second_nav" activeClass="active" to="skills" spy={true} smooth={true} offset={-20} duration={500} >Skills</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link link-nav" activeClass="active" to="project" spy={true} smooth={true} offset={-5} duration={500} >Projects </Link>
            </li>
            <li className="nav-item last-link">
              <a className="nav-link icon-border " href="https://linkedin.com/in/rana-magdi-4aa5401b0" target="_blank"><i class="fa-brands fa-linkedin-in icons "></i></a>
            </li>
            <li className="nav-item">
                <a className="nav-link icon-border " href="#"><i class="fa-brands fa-facebook-f icons"></i></a>
              </li>
            <li className="nav-item">
                <a className="nav-link icon-border " href="#"><i class="fa-brands fa-instagram icons"></i></a>
              </li>
              <li className="nav-item last-link ">
            <button className=" btn border-[1px] border-white border-solid btnScroll">
              Let's Connect
            </button>
          </li>




          </ul>

        </div>
      </div>
      </nav>
    </div>



    );
}
export default NavBar;
