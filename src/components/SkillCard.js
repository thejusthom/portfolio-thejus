import React, { useState } from 'react';
import "../styles/SkillCardStyle.css";
import { FaJava, FaPython, FaNodeJs, FaAws, FaGithub, FaAngular, FaRProject } from "react-icons/fa";
import { DiMongodb, DiPostgresql, DiMysql, DiJenkins } from "react-icons/di";
import { SiReact, SiSpringboot, SiBootstrap, SiExpress, 
         SiRedux, SiGradle, SiApachejmeter, SiHibernate, SiTerraform, 
         SiGooglecloud, SiMicrosoftazure, SiIbmcloud, SiOracle, 
         SiNumpy, SiPandas } from "react-icons/si";
import { TbBrandJavascript, TbBrandHtml5, TbBrandTypescript } from "react-icons/tb";
import { VscTerminalCmd } from "react-icons/vsc";

export default function SkillCard({id}) {
  const [activeTitle, setActiveTitle] = useState(null);

  const handleIconInteraction = (title) => {
    setActiveTitle(activeTitle === title ? null : title);
  };

  const skillsData = {
    languages: [
      { icon: <FaJava className='techLogo'/>, title: 'Java' },
      { icon: <FaPython className='techLogo'/>, title: 'Python' },
      { icon: <TbBrandHtml5 className='techLogo'/>, title: 'HTML 5' },
      { icon: <TbBrandJavascript className='techLogo'/>, title: 'JavaScript' },
      { icon: <TbBrandTypescript className='techLogo'/>, title: 'TypeScript' },
      { icon: <VscTerminalCmd className='techLogo'/>, title: 'Unix Commands' },
      { icon: <SiTerraform className='techLogo'/>, title: 'Terraform' },
      { icon: <FaRProject className='techLogo'/>, title: 'R' }
    ],
    frameworks: [
      { icon: <SiSpringboot className='techLogo'/>, title: 'Spring Boot' },
      { icon: <SiReact className='techLogo'/>, title: 'ReactJS' },
      { icon: <FaAngular className='techLogo'/>, title: 'Angular' },
      { icon: <SiBootstrap className='techLogo'/>, title: 'Bootstrap' },
      { icon: <FaNodeJs className='techLogo'/>, title: 'Node.js' },
      { icon: <SiExpress className='techLogo'/>, title: 'Express.js' }
    ],
    libraries: [
      { icon: <SiRedux className='techLogo'/>, title: 'Redux' },
      { icon: <SiGradle className='techLogo'/>, title: 'Gradle' },
      { icon: <SiApachejmeter className='techLogo'/>, title: 'JUnit' },
      { icon: <SiHibernate className='techLogo'/>, title: 'Hibernate' },
      { icon: <SiNumpy className='techLogo'/>, title: 'NumPy' },
      { icon: <SiPandas className='techLogo'/>, title: 'Pandas' }
    ],
    databases: [
      { icon: <SiOracle className='techLogo'/>, title: 'Oracle SQL' },
      { icon: <DiPostgresql className='techLogo'/>, title: 'PostgreSQL' },
      { icon: <DiMysql className='techLogo'/>, title: 'MySQL' },
      { icon: <DiMongodb className='techLogo'/>, title: 'MongoDB' }
    ],
    cloudDevOps: [
      { icon: <SiGooglecloud className='techLogo'/>, title: 'Google Cloud Platform' },
      { icon: <FaAws className='techLogo'/>, title: 'Amazon Web Services' },
      { icon: <SiMicrosoftazure className='techLogo'/>, title: 'Microsoft Azure' },
      { icon: <SiIbmcloud className='techLogo'/>, title: 'IBM Cloud' },
      { icon: <FaGithub className='techLogo'/>, title: 'Github Actions' },
      { icon: <DiJenkins className='techLogo'/>, title: 'Jenkins' }
    ]
  };

  const SkillSection = ({ title, skills }) => (
    <div className="skill-box">
      <h2>{title}</h2>
      <div className="skillset">
        {skills.map((skill, index) => (
          <div 
            key={index}
            className="skill-icon-wrapper"
            onClick={() => handleIconInteraction(skill.title)}
            onMouseEnter={() => handleIconInteraction(skill.title)}
            onMouseLeave={() => handleIconInteraction(null)}
          >
            {skill.icon}
            <span className={`skill-title ${activeTitle === skill.title ? 'active' : ''}`}>
              {skill.title}
            </span>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="skill-container" id={id}>
      <div className="skill-header">My Skills</div>
      <SkillSection title="Languages" skills={skillsData.languages} />
      <SkillSection title="Frameworks" skills={skillsData.frameworks} />
      <SkillSection title="Libraries" skills={skillsData.libraries} />
      <SkillSection title="Databases" skills={skillsData.databases} />
      <SkillSection title="Cloud & DevOps" skills={skillsData.cloudDevOps} />
    </div>
  );
}