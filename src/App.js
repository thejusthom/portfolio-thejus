import React from "react";
import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import HomeBanner from "./components/HomeBanner";
import ProjectCard from './components/ProjectCard'
import AboutMe from './components/About'
import SkillCard from './components/SkillCard'
import AnimatedCursor from "react-animated-cursor"


function App() {
  return (
    <>
    <AnimatedCursor
      color="#fff"
      innerSize={12}
      outerSize={50}
      innerScale={1}
      outerScale={2.2}
      outerAlpha={0}
      outerStyle={{
        background: '#ffffff',
        mixBlendMode: 'exclusion'
      }}
      innerStyle={{
        backgroundColor: '#1e90ff'
      }}
    />
    <div>
      <Navbar />
      <HomeBanner id = "home"/>
      <ProjectCard
        id = "project"
        className = "odd"
        projectTitle="locALL"
        projectDesc="A community-focused web platform that connects people with local events, marketplace activities, and community support services based on their location. The platform enables users to organize events, buy/sell items, share excess food, coordinate donations, and stay updated with local happenings and weather conditions, all within their specific zip code area."
        projectLink="https://github.com/thejusthom/locALL"
        // deployedProjectLink="https://wiggles.vercel.app"
        // projectImg={require('./images/projectWiggles.jpg')}
      />

      <ProjectCard
        projectTitle="CloudNotifyOps"
        projectDesc="A serverless architecture on Google Cloud Platform that automates real-time notifications and database operations using Cloud Functions and Pub/Sub. The project implements Infrastructure as Code with Terraform and includes CI/CD through GitHub Actions, making it a comprehensive solution for managing cloud-based notification systems and operational tasks."
        projectLink="https://github.com/thejusthom/CloudNotifyOps"
        // deployedProjectLink="https://deepajha14.github.io/Touch-me-not-Card/"
        // projectImg={require('./images/projectGlassmorphism.png')}
      />

      <ProjectCard
        className = "odd"
        projectTitle="Hospital Management System"
        projectDesc="A comprehensive Hospital Management System that manages patient records, appointments, blood donations, and staff data through 17 interconnected database tables. The system includes specialized database views for efficient data retrieval and reporting, along with structured SQL scripts for setup, user management, and data population."
        projectLink="https://github.com/thejusthom/dmdd-group10"
        // deployedProjectLink="https://deepajha14.github.io/Rog-Free/"
        // projectImg={require('./images/projectRogfree.png')}
      />

      <ProjectCard
        projectTitle="School Management System"
        projectDesc="This Java-based School Management System is an academic project that provides comprehensive functionalities for managing students, teachers, and classrooms through a Swing-based GUI interface with MySQL database integration. The system implements various Java features including OOP principles, authentication, data management capabilities, and follows Maven project structure while incorporating design patterns and exception handling."
        projectLink="https://github.com/thejusthom/School-Management-System"
        // deployedProjectLink="https://deepajha14.github.io/Touch-me-not-Card/"
        // projectImg={require('./images/projectGlassmorphism.png')}
      />

      <ProjectCard
        className = "odd"
        projectTitle="FlipZon"
        projectDesc="A web-based e-commerce platform built primarily with HTML, CSS, and JavaScript, with a focus on front-end development. The project is a collaborative effort involving four contributors and consists of a responsive user interface for online shopping functionality."
        projectLink="https://github.com/ThejusThomson/FlipZon"
        // deployedProjectLink="https://deepajha14.github.io/Rog-Free/"
        // projectImg={require('./images/projectRogfree.png')}
      />
      <AboutMe id = "about" />
      <SkillCard id = "skills" />
      <Footer />
    </div>
    </>
  );
}

export default App;