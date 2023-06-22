import React from "react";
import { Col, Container } from "reactstrap";

function ProjectCard({item}) {
  return (
    <div>

       <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={item.img} />
        <div className="proj-txtx">
          <h4>{item.title}</h4>
          <span>{item.description}</span>
        </div>
      </div>
    </Col>
    
    </div>
  )
}

export default ProjectCard;
