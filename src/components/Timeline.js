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
      year: "2023 - 2025",
      title: "MS in Software Engineering",
      institution: "Northeastern University, Boston",
      description: 
        "• GPA: 3.7/4.0\n" +
        "• Core coursework: Object-Oriented Design, Algorithms, Cloud Computing, Database Management\n" +
        "• Built locALL community platform and CloudNotifyOps serverless architecture\n" +
        "• Won 1st place at DNATE Hackathon — AI-powered Medical Science Liaison platform",
      type: "education"
    },
    {
      id: 2,
      year: "Spring 2025",
      title: "Software Engineering Co-op",
      institution: "Fashion Index",
      description: 
        "• Built e-commerce features with React, TypeScript, and Next.js\n" +
        "• Developed responsive UI components for fashion retail platform\n" +
        "• Implemented search and filtering functionality for product catalogs\n" +
        "• Collaborated in agile sprints delivering production-ready code",
      type: "work"
    },
    {
      id: 3,
      year: "2021 - 2023",
      title: "Application Developer",
      institution: "IBM",
      description: 
        "• Migrated 50+ legacy SOAP services to RESTful APIs — increased transaction capacity by 50%\n" +
        "• Implemented parallel processing with Apache Camel — reduced latency by 80%\n" +
        "• Built Spring Boot microservices processing millions of financial transactions daily\n" +
        "• Earned IBM Consulting VP's Client & Partner Success Award (2023)\n" +
        "• Led Agile/Kanban ceremonies and mentored 3 junior developers",
      type: "work"
    },
    {
      id: 4,
      year: "2020 - 2021",
      title: "Associate Systems Engineer",
      institution: "IBM",
      description: 
        "• Developed backend services with Java and Spring Boot for banking clients\n" +
        "• Optimized Oracle SQL queries reducing execution time by 35%\n" +
        "• Maintained high-availability systems with 99.9% uptime SLA\n" +
        "• Implemented SonarQube for code quality — reduced technical debt by 40%",
      type: "work"
    },
    {
      id: 5,
      year: "2016 - 2020",
      title: "B.E. Electronics & Communication",
      institution: "Anna University",
      description: 
        "• Strong foundation in Data Structures, OOP, and algorithms\n" +
        "• Completed hands-on Java programming labs\n" +
        "• Built programming skills alongside electronics expertise",
      type: "education"
    }
  ];

  return (
    <div className="timeline-container" id="timeline">
      <div className="timeline-header">Experience & Education</div>
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
                  e.stopPropagation();
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