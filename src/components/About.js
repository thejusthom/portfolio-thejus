import React from 'react';
import '../styles/AboutStyle.css'
import handshake from '../assets/Handshake.gif'

function About() {
    return (
        <div className="about-container" id='about' >
          <div className="aboutMe-text">
            <h3>Hello there, <img src={handshake} width="80px" alt="loading..." />            </h3>
            I'm <span> Thejus </span>, a tech enthusiast pursuing my <span>MS in Software Engineering </span> from Boston, MA. Think of me as a code optimizer who gets excited about making systems run faster – I actually managed to speed up processing times by 40% at IBM (yes, I'm that person who gets a kick out of performance metrics! 🚀).
            <br/> <br/>
            When I'm not geeking out over cloud technologies, you'll find me building cool stuff like <span>CloudNotifyOps</span> – (my latest project) or working on community platforms that help people connect and share resources like <span>locAll</span>. I love turning complex problems into elegant solutions, whether it's migrating legacy systems or creating real-time processing pipelines.
            My time at <span>IBM</span> taught me that great software is about more than just code – it's about collaboration, continuous learning, and creating solutions that actually make a difference. I'm that developer who gets equally excited about optimizing database queries and mentoring team members! 
            Want to know more about me? Feel free to <a className='resume' href="https://drive.google.com/file/d/10hP9-vWW1ta2GNATZPwnoUivuZwuaYY5/view?usp=sharing" target="_blank" rel="noopener noreferrer">explore my resume.</a>
            <br/><br/>
            Off the keyboard, I'm a huge sports fan! You'll catch me cheering for F1 races (talk about optimization in real life! 🏎️) or playing soccer, badminton, and cricket. Recently started exploring American sports too – trying to wrap my head around baseball statistics and basketball plays. Nothing beats the thrill of both optimizing code and scoring goals! ⚽
            <br/><br/>
            Looking to bring my mix of technical expertise and collaborative spirit to help build the next big thing. Let's create something awesome together! 🌟
          </div>
          {/* <div className="profile-photo">
            <div className="heading"> About Me</div>
            <img className="img" src="" alt="Profile"></img>
          </div>
          <div className="name">Thejus</div> */}
        </div>
    );
}

export default About;