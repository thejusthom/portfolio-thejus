import React from 'react';
import '../styles/AboutStyle.css';

function About() {
    return (
        <div className="about-container" id='about'>
          <div className="aboutMe-text">
            <h3>Hey there! <span role="img" aria-label="wave">👋</span></h3>
            I'm <span>Thejus</span>, a software engineer finishing my <span>MS in Software Engineering</span> at Northeastern University. I specialize in backend systems — the kind that process millions of transactions without breaking a sweat.
            <br/><br/>
            At <span>IBM</span>, I migrated 50+ legacy APIs to REST, cut latency by 80% with parallel processing, and earned a <span>VP's Client & Partner Success Award</span> for delivery excellence. My work powered financial transaction systems for major banking clients.
            <br/><br/>
            Recently, I won <span>1st place at DNATE's hackathon</span> building an AI-powered Medical Science Liaison practice platform in just 48 hours. I love turning complex problems into elegant, scalable solutions.
            <br/><br/>
            <span>What I bring:</span> 3+ years of Java/Spring Boot expertise, cloud architecture (AWS, GCP, Azure), and the ability to own projects end-to-end — from database design to CI/CD pipelines.
            <br/><br/>
            <a className='resume' href="https://drive.google.com/file/d/1h69hnIqHttBGZVc_3UvFe0bsP5KJP1gQ/view?usp=sharing" target="_blank" rel="noopener noreferrer">
              View my resume →
            </a>
            <br/><br/>
            <span>Off the keyboard:</span> Manchester City fan ⚽, F1 enthusiast 🏎️, cricket lover 🏏, and still learning the rules of American football. I also referee intramural sports at Northeastern and volunteer at my church's youth ministry.
          </div>
        </div>
    );
}

export default About;