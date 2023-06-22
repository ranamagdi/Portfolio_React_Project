import React from "react";
import Header from "./Header";
import Projects from "./Projects";
import NavBar from "./Navbar";
import Skills from "./Skills";
import Contact from "./Contact";
import Newsletter from "./Newsletter";
import Footer from "./Footer";

function Home(){
    return(
        <div>
            <NavBar/>
            <Header/>
            <Skills/>
            <Projects/>
            <Contact/>
            <Newsletter/>
            <Footer/>
        </div>
    )
}
export default Home;
