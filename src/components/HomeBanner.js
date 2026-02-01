import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import "../styles/HomeBannerStyle.css";
import Typewriter from "./Typewriter";

export default function Banner({id}) {
  const [terminalText, setTerminalText] = useState('');
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const terminalLines = [
      { text: '$ whoami', delay: 0 },
      { text: 'thejus-thomson', delay: 800, isOutput: true },
      { text: '$ cat skills.txt', delay: 1600 },
      { text: 'Java, Spring Boot, Python, React, AWS, GCP', delay: 2400, isOutput: true },
      { text: '$ echo $EXPERIENCE', delay: 3200 },
      { text: '3+ years @ IBM | MS @ Northeastern', delay: 4000, isOutput: true },
      { text: '$ ./start_collaboration.sh', delay: 4800 },
      { text: '✓ Ready to build something amazing...', delay: 5600, isOutput: true, isSuccess: true },
    ];

    let timeouts = [];
    
    terminalLines.forEach((line, index) => {
      const timeout = setTimeout(() => {
        setTerminalText(prev => prev + (prev ? '\n' : '') + 
          (line.isOutput 
            ? `<span class="${line.isSuccess ? 'terminal-success' : 'terminal-output'}">${line.text}</span>` 
            : `<span class="terminal-command">${line.text}</span>`
          )
        );
      }, line.delay);
      timeouts.push(timeout);
    });

    // Blinking cursor
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 530);

    return () => {
      timeouts.forEach(t => clearTimeout(t));
      clearInterval(cursorInterval);
    };
  }, []);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const terminalVariants = {
    hidden: { opacity: 0, scale: 0.95, x: 50 },
    visible: {
      opacity: 1,
      scale: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut", delay: 0.5 }
    }
  };

  return (
    <div className="home" id={id}> 
      <motion.div 
        className='content'
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="hero-grid">
          <div className="wrapper">
            <motion.div className="name" variants={itemVariants}>
              Thejus Thomson
            </motion.div>
            <motion.div className="staticTitle" variants={itemVariants}>
              Backend Engineer
              <div className='hrLine'></div>
            </motion.div>
            <motion.div variants={itemVariants}>
              <Typewriter/>
            </motion.div>
            <motion.div className="hero-subtitle" variants={itemVariants}>
              Building scalable systems that handle millions of transactions
            </motion.div>
            <motion.div className="hero-cta-container" variants={itemVariants}>
              <a className='btn primary' href="https://linkedin.com/in/thejusthomson/" target="_blank" rel="noopener noreferrer">
                Let's Connect
              </a>
              <a className='btn secondary' href="https://drive.google.com/file/d/10hP9-vWW1ta2GNATZPwnoUivuZwuaYY5/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                Resume
              </a>
            </motion.div>
          </div>

          {/* Terminal Element */}
          <motion.div 
            className="terminal-container"
            variants={terminalVariants}
          >
            <div className="terminal">
              <div className="terminal-header">
                <div className="terminal-buttons">
                  <span className="terminal-btn red"></span>
                  <span className="terminal-btn yellow"></span>
                  <span className="terminal-btn green"></span>
                </div>
                <span className="terminal-title">thejus@portfolio ~ </span>
              </div>
              <div className="terminal-body">
                <pre 
                  className="terminal-content"
                  dangerouslySetInnerHTML={{ __html: terminalText }}
                />
                <span className={`terminal-cursor ${showCursor ? 'visible' : ''}`}>▋</span>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}