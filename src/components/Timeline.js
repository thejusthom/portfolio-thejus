import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import '../styles/TimelineStyle.css';
import { FaChevronDown, FaGraduationCap, FaBriefcase } from 'react-icons/fa';

function Timeline() {
  const [activeItem, setActiveItem] = useState(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const handleItemClick = (id) => {
    setActiveItem(activeItem === id ? null : id);
  };
  
  const timelineData = [
    {
      id: 1,
      year: "2026 - Present",
      title: "Software Engineer",
      institution: "AI Skunkworks, Boston",
      description: 
       "• Developing Python REST APIs for Medhavi, an LLM-powered platform converting static textbooks into conversational Canvas LMS courses serving 1,000+ students\n" +
"• Integrating OpenAI models for AI-generated quizzes, summaries, and lecture notes reducing course build time from weeks to hours\n" +
"• Architecting OpenStax and GitHub markdown ingestion pipelines with FERPA-compliant data handling and bi-weekly GitHub deployment cadence",
      type: "work",
      current: true           // ← mark current here, not hardcoded in JSX
    },
    {
      id: 2,
      year: "2023 - 2025",
      title: "MS in Software Engineering",
      institution: "Northeastern University, Boston",
      description: 
        "• GPA: 3.8/4.0\n" +
        "• Core coursework: Object-Oriented Design, Algorithms, Cloud Computing, Database Management\n" +
        "• Built locALL community platform and CloudNotifyOps serverless architecture\n" +
        "• Won 1st place at DNATE Hackathon — AI-powered Medical Science Liaison platform",
      type: "education"
    },
    {
      id: 3,
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
      id: 4,
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
      id: 5,
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
      id: 6,
      year: "2016 - 2020",
      title: "B.E. Electronics Engineering",
      institution: "Anna University",
      description: 
        "• Strong foundation in Data Structures, OOP, and algorithms\n" +
        "• Completed hands-on Java programming labs\n" +
        "• Built programming skills alongside electronics expertise",
      type: "education"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const itemVariantsRight = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <div className="timeline-container" id="timeline" ref={ref}>
      <motion.div 
        className="timeline-header"
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        Experience & Education
      </motion.div>
      <motion.div 
        className="timeline"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {timelineData.map((item, index) => (
          <motion.div 
            key={item.id}
            className={`timeline-item ${item.type} ${activeItem === item.id ? 'expanded' : ''} ${item.current ? 'current' : ''}`}
            onClick={() => handleItemClick(item.id)}
            variants={index % 2 === 0 ? itemVariantsRight : itemVariants}
            whileHover={{ scale: 1.02 }}
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
              <motion.div 
                className={`timeline-description ${activeItem === item.id ? 'active' : ''}`}
                initial={false}
                animate={{ 
                  height: activeItem === item.id ? 'auto' : 0,
                  opacity: activeItem === item.id ? 1 : 0
                }}
                transition={{ duration: 0.3 }}
              >
                {item.description}
              </motion.div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export default Timeline;