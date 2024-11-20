import React, { useState } from 'react';
import '../styles/TimelineStyle.css';
import { FaChevronDown, FaGraduationCap, FaBriefcase } from 'react-icons/fa';

function Timeline() {
  const [activeItem, setActiveItem] = useState(null);

  const handleItemClick = (id) => {
    setActiveItem(activeItem === id ? null : id);
  };
  
  const timelineData = [
    {
      id: 1,
      year: "2023 - Present",
      title: "Masters in Software Engineering",
      institution: "Northeastern University",
      description: "• Core coursework in Object-Oriented Design and Program Structure & Algorithms\n" +
      "• Advanced studies in Web Design, UX Engineering, and Cloud Computing\n" +
      "• Specialized in Data Science Engineering and Database Management\n" +
      "• Hands-on experience with modern software development methodologies",
      type: "education"
    },
    {
      id: 2,
      year: "2021 - 2023",
      title: "Application Developer",
      institution: "IBM",
      description: "• Developed RESTful APIs with Spring Boot & Hibernate achieving sub-second response times\n" +
      "• Reduced processing time by 40% using Apache Camel parallel threading\n" +
      "• Migrated SOAP to REST APIs, increasing transaction capacity by 50%\n" +
      "• Managed 30+ projects using Agile/Kanban methodologies\n" +
      "• Enhanced security with Tomcat 9 upgrade and SonarQube implementation",
      type: "work"
    },
    {
      id: 3,
      year: "2016 - 2020",
      title: "Bachelor Engineering",
      institution: "Anna University",
      description: "• Secured top grades in Data Structures and Object-Oriented Programming\n" +
      "• Completed practical training in OOP Lab with hands-on Java programming\n" +
      "• Developed strong foundation in programming alongside electronics expertise",
      type: "education"
    }
  ];

  return (
    <div className="timeline-container">
      <div className="timeline">
        {timelineData.map((item) => (
          <div 
            key={item.id}
            className={`timeline-item ${item.type} ${activeItem === item.id ? 'expanded' : ''}`}
            onClick={() => handleItemClick(item.id)}
          >
            <div className="timeline-dot">
              {item.type === 'education' ? 
                <FaGraduationCap className="timeline-icon" /> : 
                <FaBriefcase className="timeline-icon" />
              }
            </div>
            <div className="timeline-content">
              <div className="timeline-year">{item.year}</div>
              <h3 className="timeline-title">{item.title}</h3>
              <div className="timeline-institution">{item.institution}</div>
              <button 
                className={`expand-button ${activeItem === item.id ? 'active' : ''}`}
                onClick={(e) => {
                  e.stopPropagation(); // Prevent double-triggering
                  handleItemClick(item.id);
                }}
                aria-label={activeItem === item.id ? 'Collapse' : 'Expand'}
              >
                <FaChevronDown />
              </button>
              <div className={`timeline-description ${activeItem === item.id ? 'active' : ''}`}>
                {item.description}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}


export default Timeline;