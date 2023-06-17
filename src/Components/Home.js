import React from "react";
import Header from "./Header";
import Projects from "./Projects";
import NavBar from "./Navbar";
import Skills from "./Skills";

function Home(){
    return(
        <div>
            <NavBar/>
            <Header/>
            <Skills/>
            <Projects/>
        </div>
    )
}
export default Home;
