import React, { useState } from 'react';
import "../styles/ProjectCardStyle.css";
import { FaArrowRight, FaTimes, FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";

export default function ProjectCard(props) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleGitHubClick = (e) => {
    e.stopPropagation();
    window.open(`${props.projectLink}`, '_blank');
  };

  const handleCardClick = () => {
    if (props.caseStudy) {
      setIsModalOpen(true);
      document.body.style.overflow = 'hidden';
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = 'unset';
  };

  return (
    <>
      <div className='project-window' id={props.id}>
        <div 
          className={`project-wrapper ${props.className} ${props.caseStudy ? 'has-case-study' : ''}`}
          onClick={handleCardClick}
        >
          <div className="about-project">
            <div className="project-header">
              <div className="project-title-section">
                {props.award && <span className="project-award">{props.award}</span>}
                <h2 className="project-title">{props.projectTitle}</h2>
              </div>
            </div>
            
            <p className="project-summary">{props.projectDesc}</p>
            
            {props.techStack && (
              <div className="tech-stack">
                {props.techStack.map((tech, index) => (
                  <span key={index} className="tech-tag">{tech}</span>
                ))}
              </div>
            )}

            <div className="project-actions">
              <button className='btn github-btn' onClick={handleGitHubClick}>
                <FiGithub size={18}/>
                <span>View Code</span>
              </button>
              {props.caseStudy && (
                <button className='btn case-study-btn' onClick={handleCardClick}>
                  <span>Read Case Study</span>
                  <FaArrowRight className='btn-arrow' size={16}/>
                </button>
              )}
              {props.deployedLink && (
                <a 
                  className='btn live-btn' 
                  href={props.deployedLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                >
                  <FaExternalLinkAlt size={14}/>
                  <span>Live Demo</span>
                </a>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Case Study Modal */}
      {isModalOpen && props.caseStudy && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>
              <FaTimes size={24}/>
            </button>
            
            <div className="modal-header">
              {props.award && <span className="modal-award">{props.award}</span>}
              <h1 className="modal-title">{props.projectTitle}</h1>
              <p className="modal-subtitle">{props.caseStudy.tagline}</p>
            </div>

            <div className="modal-body">
              {/* Overview */}
              <section className="case-section">
                <h3>Overview</h3>
                <p>{props.caseStudy.overview}</p>
              </section>

              {/* Problem */}
              <section className="case-section">
                <h3>The Problem</h3>
                <p>{props.caseStudy.problem}</p>
              </section>

              {/* Approach */}
              <section className="case-section">
                <h3>My Approach</h3>
                <ul className="approach-list">
                  {props.caseStudy.approach.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </section>

              {/* Tech Stack */}
              <section className="case-section">
                <h3>Tech Stack</h3>
                <div className="modal-tech-stack">
                  {props.techStack?.map((tech, index) => (
                    <span key={index} className="modal-tech-tag">{tech}</span>
                  ))}
                </div>
              </section>

              {/* Impact */}
              <section className="case-section">
                <h3>Impact & Results</h3>
                <div className="impact-grid">
                  {props.caseStudy.impact.map((item, index) => (
                    <div key={index} className="impact-card">
                      <span className="impact-metric">{item.metric}</span>
                      <span className="impact-label">{item.label}</span>
                    </div>
                  ))}
                </div>
              </section>

              {/* Learnings */}
              {props.caseStudy.learnings && (
                <section className="case-section">
                  <h3>Key Learnings</h3>
                  <p>{props.caseStudy.learnings}</p>
                </section>
              )}
            </div>

            <div className="modal-footer">
              <a 
                className='modal-btn github' 
                href={props.projectLink} 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaGithub size={20}/>
                <span>View on GitHub</span>
              </a>
              {props.deployedLink && (
                <a 
                  className='modal-btn live' 
                  href={props.deployedLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <FaExternalLinkAlt size={16}/>
                  <span>View Live</span>
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}