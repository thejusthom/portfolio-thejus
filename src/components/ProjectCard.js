import React, { useState } from 'react';
import "../styles/ProjectCardStyle.css";
import { FaArrowRight, FaChevronDown } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";

export default function ProjectCard(props) {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleOnClick = () => {
    window.open(`${props.projectLink}`);
  }

  return (
    <div className='project-window' id={props.id}>
      <div className={`project-wrapper ${props.className} ${isExpanded ? 'expanded' : ''}`}>
        <div className="about-project">
          <div className="project-header">
            <h2 className="project-title">{props.projectTitle}</h2>
            <button 
              className={`expand-toggle ${isExpanded ? 'expanded' : ''}`}
              onClick={() => setIsExpanded(!isExpanded)}
            >
              <FaChevronDown />
            </button>
          </div>
          <div className="project-content">
            <div className="project-preview">
              {props.shortDesc || props.projectDesc.substring(0, 100) + '...'}
            </div>
            <div className="project-full">
              {props.projectDesc}
            </div>
          </div>
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