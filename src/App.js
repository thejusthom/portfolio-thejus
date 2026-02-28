import React, { useState, useEffect, createContext } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ReactGA from 'react-ga4';
import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import HomeBanner from "./components/HomeBanner";
import ProjectCard from './components/ProjectCard';
import AboutMe from './components/About';
import SkillCard from './components/SkillCard';
import ThemeToggle from './components/ThemeToggle';
import ChatWidget from './components/ChatWidget';
import AnimatedCursor from "react-animated-cursor";
import { Helmet } from 'react-helmet';
import Timeline from "./components/Timeline";

// Initialize Google Analytics
ReactGA.initialize('G-7YH7MKLFQ9');

// Create Theme Context
export const ThemeContext = createContext();

function App() {
  const [darkMode, setDarkMode] = useState(true);

  // Track page views
  useEffect(() => {
    ReactGA.send({ hitType: 'pageview', page: window.location.pathname });
  }, []);

  useEffect(() => {
    // Check for saved theme preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setDarkMode(savedTheme === 'dark');
    }
  }, []);

  useEffect(() => {
    // Apply theme to body
    document.body.setAttribute('data-theme', darkMode ? 'dark' : 'light');
    localStorage.setItem('theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  // Case Study Data
  const caseStudies = {
    mslPlatform: {
      tagline: "AI-powered training platform built in 48 hours that won 1st place at DNATE Hackathon",
      overview: "Medical Science Liaisons (MSLs) need to stay current with vast amounts of medical literature and communicate complex scientific information to healthcare providers. Traditional training methods are time-consuming and don't provide real-time feedback.",
      problem: "MSLs spend weeks preparing for each HCP interaction, manually reviewing hundreds of documents. There was no efficient way to practice scenarios and receive immediate, actionable feedback on their communication skills.",
      approach: [
        "Built a RAG (Retrieval-Augmented Generation) pipeline to ingest and index medical documents for instant retrieval",
        "Designed conversational AI scenarios that simulate real HCP interactions",
        "Implemented real-time feedback scoring on scientific accuracy, communication clarity, and engagement",
        "Created a dashboard to track progress and identify knowledge gaps",
        "Collaborated with a 4-person team using pair programming and rapid iteration"
      ],
      impact: [
        { metric: "1st Place", label: "DNATE Hackathon Winner" },
        { metric: "48 hrs", label: "Built from scratch" },
        { metric: "20+", label: "Teams competed against" },
        { metric: "90%", label: "Accuracy in document retrieval" }
      ],
      learnings: "This hackathon reinforced the power of RAG for domain-specific applications. The key insight was that MSLs don't need generic AI — they need AI that understands their specific document corpus and can provide contextually relevant practice scenarios."
    },
    locall: {
      tagline: "Community platform connecting neighbors through events, marketplace, and resource sharing",
      overview: "Modern neighborhoods often lack the tight-knit community feel of the past. People don't know their neighbors, miss local events, and have no easy way to share resources or help those in need within their immediate community.",
      problem: "Existing platforms like Facebook Groups or Nextdoor are cluttered with ads and lack focus. There was no dedicated platform for hyperlocal community building that combined events, marketplace, food sharing, and donations in one place.",
      approach: [
        "Designed a location-first architecture using zip code-based filtering for all content",
        "Built RESTful APIs with Node.js and Express for scalable backend services",
        "Implemented real-time notifications using WebSocket for instant community updates",
        "Created MongoDB schemas optimized for geospatial queries and community relationships",
        "Integrated weather API to help users plan outdoor community events"
      ],
      impact: [
        { metric: "5", label: "Core modules built" },
        { metric: "Real-time", label: "Notification system" },
        { metric: "Zip-based", label: "Location filtering" },
        { metric: "Full CRUD", label: "For all features" }
      ],
      learnings: "Building a community platform taught me that the hardest problem isn't technical — it's designing features that encourage genuine human connection. The donation and food-sharing modules required careful UX to build trust between strangers."
    },
    cloudNotifyOps: {
      tagline: "Serverless event-driven architecture demonstrating cloud-native patterns on GCP",
      overview: "Modern applications need to respond to events in real-time while maintaining scalability and cost efficiency. This project demonstrates how to build production-ready serverless infrastructure using industry best practices.",
      problem: "Many teams struggle to implement proper event-driven architectures. I wanted to create a reference implementation that showcases Pub/Sub messaging, Cloud Functions, and Infrastructure as Code — all with proper CI/CD pipelines.",
      approach: [
        "Designed event-driven architecture using Google Cloud Pub/Sub for message queuing",
        "Implemented Cloud Functions triggered by various event types (HTTP, Pub/Sub, Cloud Storage)",
        "Created Terraform modules for reproducible infrastructure deployment",
        "Built GitHub Actions workflows for automated testing and deployment",
        "Documented architectural decisions and patterns for future reference"
      ],
      impact: [
        { metric: "100%", label: "Infrastructure as Code" },
        { metric: "Auto", label: "CI/CD Pipeline" },
        { metric: "Serverless", label: "Zero server management" },
        { metric: "Event-driven", label: "Architecture pattern" }
      ],
      learnings: "This project deepened my understanding of cloud-native patterns. The biggest insight was how Terraform modules can dramatically speed up infrastructure development once you have a solid foundation of reusable components."
    },
    hospitalManagement: {
      tagline: "Comprehensive healthcare data system with 17 interconnected tables and optimized queries",
      overview: "Healthcare facilities manage complex relationships between patients, staff, appointments, medical records, and resources. A well-designed database is critical for operational efficiency and patient care.",
      problem: "Healthcare data is inherently complex with many-to-many relationships, temporal data, and strict integrity requirements. The challenge was designing a schema that handles this complexity while maintaining query performance.",
      approach: [
        "Designed normalized database schema with 17 tables covering all hospital operations",
        "Created specialized views for common reporting needs (patient history, staff schedules, inventory)",
        "Implemented stored procedures for complex operations like appointment scheduling",
        "Built role-based access control at the database level",
        "Optimized indexes based on query patterns and access frequency"
      ],
      impact: [
        { metric: "17", label: "Database tables" },
        { metric: "3NF", label: "Normalization level" },
        { metric: "10+", label: "Specialized views" },
        { metric: "RBAC", label: "Security model" }
      ],
      learnings: "Healthcare data taught me the importance of thinking about data integrity from day one. The blood donation module in particular required careful handling of expiration dates, compatibility matching, and audit trails."
    },
    schoolManagement: {
      tagline: "Full-stack Java application demonstrating OOP principles and design patterns",
      overview: "Educational institutions need systems to manage students, teachers, courses, and administrative tasks. This project was built to demonstrate enterprise Java development practices.",
      problem: "Create a comprehensive management system that showcases object-oriented design, proper layered architecture, and database integration while remaining maintainable and extensible.",
      approach: [
        "Implemented MVC architecture with clear separation of concerns",
        "Built Swing-based GUI with intuitive navigation and form validation",
        "Used DAO pattern for database operations with MySQL",
        "Applied Factory and Singleton patterns where appropriate",
        "Created comprehensive exception handling and logging"
      ],
      impact: [
        { metric: "MVC", label: "Architecture pattern" },
        { metric: "OOP", label: "Design principles" },
        { metric: "Maven", label: "Build management" },
        { metric: "JDBC", label: "Database connectivity" }
      ],
      learnings: "This project reinforced that good architecture makes code enjoyable to work with. The DAO pattern in particular made it trivial to swap database implementations during development."
    }
  };

  // Page transition variants
  const pageVariants = {
    initial: { opacity: 0 },
    animate: { 
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    },
    exit: { opacity: 0 }
  };

  const isTouchDevice = typeof window !== 'undefined' && window.matchMedia('(hover: none) and (pointer: coarse)').matches;

  return (
    <ThemeContext.Provider value={{ darkMode, toggleTheme }}>
      <Helmet>
          <title>Thejus Thomson</title>
          <meta name="description" content="Software Engineer specializing in Java, Spring Boot, and cloud architecture. 3+ years at IBM building scalable backend systems. MS from Northeastern University." />
          <meta property="og:title" content="Thejus Thomson" />
          <meta property="og:description" content="Building scalable backend systems. Java, Spring Boot, AWS, GCP. 3+ years at IBM, MS from Northeastern." />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://thejusthomson.netlify.app" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Thejus Thomson" />
          <meta name="twitter:description" content="Software Engineer specializing in Java, Spring Boot, and cloud architecture." />
          <meta name="keywords" content="Software Engineer, Backend Developer, Java, Spring Boot, AWS, GCP, Boston, Northeastern" />
          <meta name="author" content="Thejus Thomson" />
      </Helmet>
      {!isTouchDevice && (
      <AnimatedCursor
        color="#fff"
        innerSize={12}
        outerSize={50}
        innerScale={1}
        outerScale={2.2}
        outerAlpha={0}
        outerStyle={{
          background: darkMode ? '#39FF14' : '#D96C3A',
          mixBlendMode: 'exclusion',
          zIndex: 9999
        }}
        innerStyle={{
          backgroundColor: darkMode ? '#39FF14' : '#D96C3A',
          zIndex: 9999
        }}
        clickables={[
          'a',
          'input[type="text"]',
          'input[type="email"]',
          'input[type="number"]',
          'input[type="submit"]',
          'input[type="image"]',
          'label[for]',
          'select',
          'textarea',
          'button',
          '.link',
          '.modal-close',
          '.modal-btn',
          '.btn',
          '.expand-button',
          '.expand-toggle',
          '.project-wrapper.has-case-study',
          '.theme-toggle',
          '.chat-toggle',
          '.chat-close',
          '.chat-send',
          '.suggestion-chip',
          '.chat-input'
        ]}
      />
      )}
      <ThemeToggle />
      <ChatWidget />
      <AnimatePresence mode="wait">
        <motion.div
          key="main"
          variants={pageVariants}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          <Navbar />
          <HomeBanner id="home"/>
          <Timeline id="timeline"/>
          
          <ProjectCard
            id="project"
            className="odd"
            projectTitle="MSL Practice Platform"
            award="🏆 Hackathon Winner"
            projectDesc="AI-powered Medical Science Liaison training platform. Features RAG-based document retrieval, real-time practice scenarios with AI feedback, and performance analytics."
            techStack={["React", "Python", "OpenAI API", "RAG", "LangChain", "FastAPI"]}
            projectLink="https://github.com/thejusthom"
            deployedLink="https://msl-practice-gym-oats.vercel.app/"
            caseStudy={caseStudies.mslPlatform}
          />

          <ProjectCard
            projectTitle="locALL"
            projectDesc="Community platform connecting neighbors through local events, marketplace, food sharing, and donation coordination — all filtered by zip code."
            techStack={["React", "Node.js", "Express", "MongoDB", "WebSocket", "REST API"]}
            projectLink="https://github.com/thejusthom/locALL"
            caseStudy={caseStudies.locall}
          />

          <ProjectCard
            className="odd"
            projectTitle="CloudNotifyOps"
            projectDesc="Serverless notification architecture on GCP demonstrating event-driven design, Infrastructure as Code, and CI/CD best practices."
            techStack={["GCP", "Cloud Functions", "Pub/Sub", "Terraform", "GitHub Actions"]}
            projectLink="https://github.com/thejusthom/CloudNotifyOps"
            caseStudy={caseStudies.cloudNotifyOps}
          />

          <ProjectCard
            projectTitle="Hospital Management System"
            projectDesc="Healthcare data management with 17 interconnected tables, specialized views for reporting, and optimized queries for performance."
            techStack={["SQL", "Oracle", "PL/SQL", "Database Design", "ERD"]}
            projectLink="https://github.com/thejusthom/dmdd-group10"
            caseStudy={caseStudies.hospitalManagement}
          />

          <ProjectCard
            className="odd"
            projectTitle="School Management System"
            projectDesc="Full-stack Java application with Swing GUI demonstrating OOP principles, design patterns, and database integration."
            techStack={["Java", "Swing", "MySQL", "JDBC", "Maven", "MVC"]}
            projectLink="https://github.com/thejusthom/School-Management-System"
            caseStudy={caseStudies.schoolManagement}
          />

          <ProjectCard
            projectTitle="FlipZon"
            projectDesc="E-commerce web platform with responsive UI for online shopping, showcasing frontend development skills."
            techStack={["HTML", "CSS", "JavaScript"]}
            projectLink="https://github.com/ThejusThomson/FlipZon"
          />

          <AboutMe id="about" />
          <SkillCard id="skills" />
          <Footer />
        </motion.div>
      </AnimatePresence>
    </ThemeContext.Provider>
  );
}

export default App;