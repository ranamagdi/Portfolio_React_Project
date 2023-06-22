import React,{useState} from "react";
import ProjectCard from "./ProjectCard";
import { Container, Row, Col,Nav,NavLink,NavItem  } from "reactstrap";
import TrackVisibility from 'react-on-screen';

function Projects(){

    const [durum, setDurum] = useState(1);

    const projects = [
      {
        id: 1,
        title: "Business Startup",
        description: "Design & Development",
        img: 'images/project1.png',
      },
      {
        id: 2,
        title: "Business Startup",
        description: "Design & Development",
        img: 'images/project2.png',
      },
      {
        id: 3,
        title: "Business Startup",
        description: "Design & Development",
        img: 'images/project3.png',
      },
      {
        id: 4,
        title: "Business Startup",
        description: "Design & Development",
        img: 'images/project4.png',
      },
      {
        id: 5,
        title: "Business Startup",
        description: "Design & Development",
        img: 'images/project5.png',
      },
      {
        id: 6,
        title: "Business Startup",
        description: "Design & Development",
        img: 'images/project6.png',
      },
    ];
    return(
        <div id="projects" className="project">
        <div className="bg-[#171717] text-white py-10">
        <h1 className="text-center text-4xl font-bold py-6">Projects</h1>
        <p className="text-center max-w-[1000px] lg:px-6 mx-auto text-[#939191]">
          My name is Rana , i live in Egypt-Cairo , this is the 2nd project in react.js development.
        </p>
        <div className=" nav-pills flex justify-center items-center gap-4 mt-12 mb-2 ">
          <button
            onClick={() => setDurum(1)}
            className={`font-bold text-[19px] border-2  bg-[#171717] rounded-[6px] p-[4px] ${
              durum === 1 ? "bg-[linear-gradient(90deg,#b004b0,#38097a)]" : ""
            }`}
          >

             <p>1st Section</p>






          </button>
          <button
            onClick={() => setDurum(2)}
            className={`font-bold text-[19px] border-2  bg-[#171717] rounded-[6px] p-[4px] ${
              durum === 2 ? "bg-[linear-gradient(90deg,#b004b0,#38097a)]" : ""
            }  `}
          >
           <p>2nd Section </p>
          </button>
          <button
            onClick={() => setDurum(3)}
            className={`font-bold text-[19px] border-2  bg-[#171717] rounded-[6px] p-[4px]  ${
              durum === 3 ? "bg-[linear-gradient(90deg,#b004b0,#38097a)]" : ""
            }`}
          >
            <p>3rd Section </p>
          </button>
        </div>
        <div className="grid grid-cols-3 p-10 justify-center items-center gap-8 lg:grid-cols-2 tl:grid-cols-1  ">
             <Row>
             {durum === 1
            ? projects.map((item, i) => <ProjectCard key={i} item={item} />)
            : null}
               </Row>
        </div>
        {durum === 2 ? (
          <div
            id="text2"
            className="tab-pane  text-center text-white py-16 max-w-4xl mx-auto lg:p-5 "
          >

          </div>
        ) : null}
        {durum === 3 ? (
          <div
            id="text1"
            className="tab-pane  text-center text-white py-5   lg:p-5"
          >
          This is my 2nd project in react.js development.
          </div>
        ) : null}
      </div>
      </div>



    )
}
export default Projects;
