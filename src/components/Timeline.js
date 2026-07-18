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
      institution: "Humanitarians AI, Boston",
      description:
        "• Fine-tuned Llama 3.1 8B with QLoRA on an A100 HPC cluster — 87.6% token accuracy for automated biomedical lexicography\n" +
        "• Built Python pipeline processing 22GB Wikipedia XML dumps into 5,600+ clean biomedical articles\n" +
        "• Replaced 20K individual JSON files with one indexed SQLite glossary — dropping lookups to O(log n)\n" +
        "• Developed remark MDX plugin auto-detecting 500+ biomedical terms via a reverse index built for 100K+ keywords\n" +
        "• Co-authoring a research paper on automated biomedical lexicography",
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
        "• Won 1st place at DNATE Hackathon — AI-powered MSL training platform built in 48 hours\n" +
        "• Built locALL community platform and CloudNotifyOps serverless architecture\n" +
        "• Refereed & supervised intramural sports — football, soccer, baseball, volleyball, cricket",
      type: "education"
    },
    {
      id: 3,
      year: "Spring 2025",
      title: "Full Stack Developer Co-op",
      institution: "Fashion Index",
      description:
        "• Engineered product filtering with MongoDB aggregation pipelines — 3x faster search\n" +
        "• Optimized Next.js and Express.js API routes with code splitting and lazy loading — 40% lower latency\n" +
        "• Scaled SEO with structured data schemas and XML sitemaps — 25% lift in organic traffic\n" +
        "• Implemented WCAG 2.1 AA accessibility with semantic HTML and ARIA across all user flows",
      type: "work"
    },
    {
      id: 4,
      year: "2021 - 2023",
      title: "Application Developer",
      institution: "IBM",
      description:
        "• Designed Apache Camel parallel processing pipeline decoupling microservice dependencies — cut latency by 80%\n" +
        "• Migrated 50+ legacy SOAP services to RESTful APIs with zero downtime — 50% higher throughput\n" +
        "• Tuned PostgreSQL and Oracle queries with composite indexing — 20% faster reads\n" +
        "• Hardened CI pipeline with SonarQube SAST scanning — critical vulnerabilities down from 20 to 5\n" +
        "• Shipped React + TypeScript billing components for 1,000+ enterprise accounts\n" +
        "• Earned IBM Consulting VP's Client & Partner Success Award (2023)",
      type: "work"
    },
    {
      id: 5,
      year: "2021",
      title: "Associate Systems Engineer",
      institution: "IBM",
      description:
        "• Launched AngularJS billing portal with role-based approvals — contract turnaround from 3 days to 2 hours\n" +
        "• Automated contract workflows via DocuSign APIs — 2K+ documents daily, 60% less manual effort\n" +
        "• Built Spring Boot + Hibernate REST APIs with sub-1-second response times\n" +
        "• Containerized services with Docker and GitHub Actions CI/CD — 20% faster releases",
      type: "work"
    },
    {
      id: 6,
      year: "2016 - 2020",
      title: "B.E. in Computer Science",
      institution: "Anna University",
      description:
        "• Strong foundation in Data Structures, OOP, and algorithms\n" +
        "• Built early projects in Java and web development",
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