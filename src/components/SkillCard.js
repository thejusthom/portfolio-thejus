import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import "../styles/SkillCardStyle.css";
import { FaJava, FaPython, FaNodeJs, FaAws, FaGithub, FaAngular, FaDocker } from "react-icons/fa";
import { DiMongodb, DiPostgresql, DiMysql, DiJenkins } from "react-icons/di";
import { SiReact, SiSpringboot, SiBootstrap, SiExpress, 
         SiRedux, SiApachekafka, SiHibernate, SiTerraform, 
         SiGooglecloud, SiMicrosoftazure, SiOracle, SiKubernetes,
         SiTypescript, SiNextdotjs, SiGraphql, SiRedis } from "react-icons/si";
import { TbBrandJavascript, TbBrandHtml5 } from "react-icons/tb";

export default function SkillCard({id}) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skillsData = {
    languages: [
      { icon: <FaJava className='techLogo'/>, title: 'Java', level: 95 },
      { icon: <FaPython className='techLogo'/>, title: 'Python', level: 85 },
      { icon: <TbBrandJavascript className='techLogo'/>, title: 'JavaScript', level: 90 },
      { icon: <SiTypescript className='techLogo'/>, title: 'TypeScript', level: 85 },
      { icon: <TbBrandHtml5 className='techLogo'/>, title: 'HTML/CSS', level: 90 },
    ],
    backend: [
      { icon: <SiSpringboot className='techLogo'/>, title: 'Spring Boot', level: 95 },
      { icon: <FaNodeJs className='techLogo'/>, title: 'Node.js', level: 85 },
      { icon: <SiExpress className='techLogo'/>, title: 'Express.js', level: 85 },
      { icon: <SiHibernate className='techLogo'/>, title: 'Hibernate', level: 90 },
      { icon: <SiGraphql className='techLogo'/>, title: 'GraphQL', level: 75 },
      { icon: <SiApachekafka className='techLogo'/>, title: 'Apache Kafka', level: 80 },
    ],
    frontend: [
      { icon: <SiReact className='techLogo'/>, title: 'React', level: 90 },
      { icon: <SiNextdotjs className='techLogo'/>, title: 'Next.js', level: 80 },
      { icon: <FaAngular className='techLogo'/>, title: 'Angular', level: 75 },
      { icon: <SiRedux className='techLogo'/>, title: 'Redux', level: 85 },
      { icon: <SiBootstrap className='techLogo'/>, title: 'Bootstrap', level: 90 },
    ],
    databases: [
      { icon: <SiOracle className='techLogo'/>, title: 'Oracle', level: 90 },
      { icon: <DiPostgresql className='techLogo'/>, title: 'PostgreSQL', level: 90 },
      { icon: <DiMysql className='techLogo'/>, title: 'MySQL', level: 90 },
      { icon: <DiMongodb className='techLogo'/>, title: 'MongoDB', level: 85 },
      { icon: <SiRedis className='techLogo'/>, title: 'Redis', level: 75 },
    ],
    cloud: [
      { icon: <FaAws className='techLogo'/>, title: 'AWS', level: 85 },
      { icon: <SiGooglecloud className='techLogo'/>, title: 'GCP', level: 85 },
      { icon: <SiMicrosoftazure className='techLogo'/>, title: 'Azure', level: 75 },
      { icon: <SiTerraform className='techLogo'/>, title: 'Terraform', level: 80 },
      { icon: <FaDocker className='techLogo'/>, title: 'Docker', level: 85 },
      { icon: <SiKubernetes className='techLogo'/>, title: 'Kubernetes', level: 75 },
      { icon: <DiJenkins className='techLogo'/>, title: 'Jenkins', level: 80 },
      { icon: <FaGithub className='techLogo'/>, title: 'GitHub Actions', level: 85 },
    ],
  };

  const categories = [
    { id: 'all', label: 'All Skills' },
    { id: 'languages', label: 'Languages' },
    { id: 'backend', label: 'Backend' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'databases', label: 'Databases' },
    { id: 'cloud', label: 'Cloud & DevOps' },
  ];

  const getFilteredSkills = () => {
    if (activeCategory === 'all') {
      return Object.entries(skillsData).flatMap(([category, skills]) => 
        skills.map(skill => ({ ...skill, category }))
      );
    }
    return skillsData[activeCategory]?.map(skill => ({ ...skill, category: activeCategory })) || [];
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.4, ease: "easeOut" }
    }
  };

  return (
    <div className="skill-container" id={id} ref={ref}>
      <motion.div 
        className="skill-header"
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        My Skills
      </motion.div>
      
      <motion.p 
        className="skill-subtitle"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        Technologies I've worked with across backend, frontend, and cloud
      </motion.p>

      {/* Category Filter */}
      <motion.div 
        className="skill-categories"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        {categories.map((cat) => (
          <button
            key={cat.id}
            className={`category-btn ${activeCategory === cat.id ? 'active' : ''}`}
            onClick={() => setActiveCategory(cat.id)}
          >
            {cat.label}
          </button>
        ))}
      </motion.div>

      {/* Skills Grid */}
      <motion.div 
        className="skills-grid"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        key={activeCategory}
      >
        {getFilteredSkills().map((skill, index) => (
          <motion.div
            key={`${skill.title}-${index}`}
            className={`skill-card ${hoveredSkill === skill.title ? 'hovered' : ''}`}
            variants={itemVariants}
            onMouseEnter={() => setHoveredSkill(skill.title)}
            onMouseLeave={() => setHoveredSkill(null)}
            whileHover={{ y: -5, scale: 1.02 }}
          >
            <div className="skill-icon-wrapper">
              {skill.icon}
            </div>
            <div className="skill-info">
              <span className="skill-name">{skill.title}</span>
              <div className="skill-progress-container">
                <motion.div 
                  className="skill-progress-bar"
                  initial={{ width: 0 }}
                  animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                  transition={{ duration: 1, delay: 0.3 + index * 0.05, ease: "easeOut" }}
                />
              </div>
              <span className="skill-level">{skill.level}%</span>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}