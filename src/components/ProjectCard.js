import React from 'react';
import "../styles/ProjectCardStyle.css";
import {FaArrowRight} from "react-icons/fa";
import {FiGithub} from "react-icons/fi";
// import Tilt from 'react-parallax-tilt';

export default function ProjectCard(props) {
  const handleOnClick = () => {
    window.open(`${props.projectLink}`);
  }

  return (
    <div className='project-window' id={props.id}>
      <div className={`project-wrapper ${props.className}`}>
        <div className="about-project">
          <h2 className="project-title">{props.projectTitle}</h2>
          <div className="desc">{props.projectDesc}</div>
          <button className='btn' onClick={handleOnClick}>
            <span>View on GitHub</span>
            <FiGithub className="social" size={20}/>
            <FaArrowRight className='btn-arrow' size={22}/>
          </button>
        </div>
      </div>
    </div>
  );
}