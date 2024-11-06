// import React from 'react'
// import "../styles/SkillCardStyle.css";
// import { FaJava,FaPython } from "react-icons/fa";
// import { AiOutlineConsoleSql } from "react-icons/ai";
// import {DiGit} from "react-icons/di";
// import {SiVisualstudiocode, SiReact, SiReactrouter, SiBootstrap, SiFigma, SiInkscape } from "react-icons/si";
// import {TbBrandCss3, TbBrandJavascript, TbBrandHtml5, TbBrandTypescript} from "react-icons/tb";
// import {IoLogoWindows, IoLogoNpm} from "react-icons/io"

// export default function SkillCard({id}) {
//   return (
//     <>
//         <div className="skill-container" id = {id}>
//           <div className="skill-header">My Skills</div>
//           <div className="skill-box">
//             <h2>Languages</h2>
//             <div className="skillset">
//               <abbr title='Java'><FaJava className='techLogo'/></abbr>
//               <abbr title='Python'><FaPython className='techLogo'/></abbr>
//               <abbr title='SQL'><AiOutlineConsoleSql className='techLogo'/></abbr>
//               <abbr title='HTML 5'><TbBrandHtml5 className='techLogo'/></abbr>
//               <abbr title='JavaScript'><TbBrandJavascript className='techLogo'/></abbr>
//               <abbr title='TypeScript'><TbBrandTypescript className='techLogo'/></abbr>
//             </div>                     
//           </div>
//           <div className="skill-box">
//             <h2>Libraries and Frameworks</h2>
//             <div className="skillset">
//               <abbr title='ReactJS'><SiReact className='techLogo'/></abbr>
//               <abbr title='CSS 3'><TbBrandCss3 className='techLogo'/></abbr>
//               <abbr title='Git/Github'><DiGit className='techLogo'/></abbr>
//               <abbr title='NPM'><IoLogoNpm className='techLogo'/></abbr>
//               <abbr title='Bootstrap'><SiBootstrap className='techLogo'/></abbr>
//               <abbr title='React Router'><SiReactrouter className='techLogo'/></abbr>
//             </div>            
//           </div>
//           <div className="skill-box">
//             <h2>Tools & Systems</h2>
//             <div className="skillset">
//               <abbr title='Visual Studio Code'><SiVisualstudiocode className='techLogo'/></abbr>
//               <abbr title='Windows'><IoLogoWindows className='techLogo'/></abbr>
//               <abbr title='Figma'><SiFigma className='techLogo'/></abbr>
//               <abbr title='Inkscape'><SiInkscape className='techLogo'/></abbr>
//             </div>            
//           </div>
//         </div>
//     </>

//   )
// }

import React from 'react';
import "../styles/SkillCardStyle.css";
import { FaJava, FaPython, FaNodeJs, FaAws, FaGithub, FaAngular, FaRProject } from "react-icons/fa";
import { AiOutlineConsoleSql } from "react-icons/ai";
import { DiGit, DiMongodb, DiPostgresql, DiMysql, DiJenkins } from "react-icons/di";
import { SiVisualstudiocode, SiReact, SiSpringboot, SiBootstrap, SiExpress, 
         SiRedux, SiGradle, SiApachejmeter, SiHibernate, SiTerraform, 
         SiGooglecloud, SiMicrosoftazure, SiIbmcloud, SiOracle, 
         SiNumpy, SiPandas } from "react-icons/si";
import { TbBrandCss3, TbBrandJavascript, TbBrandHtml5, TbBrandTypescript } from "react-icons/tb";
import { VscTerminalCmd } from "react-icons/vsc";

export default function SkillCard({id}) {
  return (
    <>
        <div className="skill-container" id={id}>
          <div className="skill-header">My Skills</div>
          
          <div className="skill-box">
            <h2>Languages</h2>
            <div className="skillset">
              <abbr title='Java'><FaJava className='techLogo'/></abbr>
              <abbr title='Python'><FaPython className='techLogo'/></abbr>
              <abbr title='HTML 5'><TbBrandHtml5 className='techLogo'/></abbr>
              <abbr title='JavaScript'><TbBrandJavascript className='techLogo'/></abbr>
              <abbr title='TypeScript'><TbBrandTypescript className='techLogo'/></abbr>
              <abbr title='Unix Commands'><VscTerminalCmd className='techLogo'/></abbr>
              <abbr title='Terraform'><SiTerraform className='techLogo'/></abbr>
              <abbr title='R'><FaRProject className='techLogo'/></abbr>
            </div>                     
          </div>

          <div className="skill-box">
            <h2>Frameworks</h2>
            <div className="skillset">
              <abbr title='Spring Boot'><SiSpringboot className='techLogo'/></abbr>
              <abbr title='ReactJS'><SiReact className='techLogo'/></abbr>
              <abbr title='Angular'><FaAngular className='techLogo'/></abbr>
              <abbr title='Bootstrap'><SiBootstrap className='techLogo'/></abbr>
              <abbr title='Node.js'><FaNodeJs className='techLogo'/></abbr>
              <abbr title='Express.js'><SiExpress className='techLogo'/></abbr>
            </div>            
          </div>

          <div className="skill-box">
            <h2>Libraries</h2>
            <div className="skillset">
              <abbr title='Redux'><SiRedux className='techLogo'/></abbr>
              <abbr title='Gradle'><SiGradle className='techLogo'/></abbr>
              <abbr title='JUnit'><SiApachejmeter className='techLogo'/></abbr>
              <abbr title='Hibernate'><SiHibernate className='techLogo'/></abbr>
              <abbr title='NumPy'><SiNumpy className='techLogo'/></abbr>
              <abbr title='Pandas'><SiPandas className='techLogo'/></abbr>
            </div>            
          </div>

          <div className="skill-box">
            <h2>Databases</h2>
            <div className="skillset">
              <abbr title='Oracle SQL'><SiOracle className='techLogo'/></abbr>
              <abbr title='PostgreSQL'><DiPostgresql className='techLogo'/></abbr>
              <abbr title='MySQL'><DiMysql className='techLogo'/></abbr>
              <abbr title='MongoDB'><DiMongodb className='techLogo'/></abbr>
            </div>            
          </div>

          <div className="skill-box">
            <h2>Cloud & DevOps</h2>
            <div className="skillset">
              <abbr title='Google Cloud Platform'><SiGooglecloud className='techLogo'/></abbr>
              <abbr title='Amazon Web Services'><FaAws className='techLogo'/></abbr>
              <abbr title='Microsoft Azure'><SiMicrosoftazure className='techLogo'/></abbr>
              <abbr title='IBM Cloud'><SiIbmcloud className='techLogo'/></abbr>
              <abbr title='Git/Github'><FaGithub className='techLogo'/></abbr>
              <abbr title='Jenkins'><DiJenkins className='techLogo'/></abbr>
            </div>            
          </div>
        </div>
    </>
  )
}