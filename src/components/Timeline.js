import React, { useState } from 'react';
import '../styles/TimelineStyle.css';

function Timeline() {
  const [activeItem, setActiveItem] = useState(null);

  const timelineData = [
    {
      id: 1,
      year: "2020 - 2022",
      title: "Masters in Computer Science",
      institution: "University Name",
      description: "Specialized in Software Engineering with focus on distributed systems. Notable projects included building scalable web applications and research in cloud computing.",
      type: "education"
    },
    {
      id: 2,
      year: "2016 - 2020",
      title: "Bachelor of Technology",
      institution: "University Name",
      description: "Major in Computer Science. Core coursework in data structures, algorithms, and software development. Led technical team for college fest.",
      type: "education"
    },
    {
      id: 3,
      year: "2022 - Present",
      title: "Software Engineer",
      institution: "Company Name",
      description: "Working on full-stack development using React and Node.js. Leading team of 5 developers for client projects.",
      type: "work"
    }
  ];

  return (
    <div className="timeline-container">
      <div className="timeline">
        {timelineData.map((item) => (
          <div 
            key={item.id}
            className={`timeline-item ${item.type} ${activeItem === item.id ? 'active' : ''}`}
            onClick={() => setActiveItem(item.id === activeItem ? null : item.id)}
          >
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <div className="timeline-year">{item.year}</div>
              <h3 className="timeline-title">{item.title}</h3>
              <div className="timeline-institution">{item.institution}</div>
              {activeItem === item.id && (
                <p className="timeline-description">{item.description}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Timeline;