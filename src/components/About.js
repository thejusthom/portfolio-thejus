import React from 'react';
import '../styles/AboutStyle.css'

function About() {
    return (
        <div className="about-container" >
          <div className="aboutMe-text">
            <h3>Hey there, 👋</h3>
            I'm <span> Thejus </span>, pursuing <span>MS in Software Engineering </span> from Boston, MA. I build websites with a focus on responsiveness, accessibility and pleasing aesthetics. Being well versed in all the key languages allows me to rapidly design, code and deploy in an organized and efficient manner. While I specialize in <span>frontend development,</span> I'm also delving into <span>backend technologies.</span> I'm all ears for <span>new opportunities</span> to create awesome software solutions. Let's team up and cook up some digital wonders together.
            <br/> <br/>
            Beyond coding, <span>I'm an artist at heart❤️</span> – you'll often find me lost in the world of sketches and colors. I really enjoy being creative, so I like to spend my free time drawing, sketching, and painting. It's a great way for me to unwind and tap into my creative side.
            Want to know more about me? Feel free to <a className='resume' href="https://drive.google.com/file/d/1hROCoNMpIkGQahB0E7v-OFbXlv9EHJrB/view?usp=sharing" target="_blank" rel="noopener noreferrer">explore my resume.</a>
          </div>
          <div className="profile-photo">
            <div className="heading"> About Me</div>
            <img className="img" src="" alt="Profile"></img>
          </div>
          <div className="name">Thejus</div>
        </div>
    );
}

export default About;