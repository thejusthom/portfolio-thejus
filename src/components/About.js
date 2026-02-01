import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import '../styles/AboutStyle.css';

function About() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15
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

    return (
        <motion.div 
            className="about-container" 
            id='about'
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
        >
            <div className="aboutMe-text">
                <motion.h3 variants={itemVariants}>
                    Hey there! <span role="img" aria-label="wave">👋</span>
                </motion.h3>
                
                <motion.p variants={itemVariants}>
                    I'm <span>Thejus</span>, a software engineer finishing my <span>MS in Software Engineering</span> at Northeastern University. I specialize in backend systems — the kind that process millions of transactions without breaking a sweat.
                </motion.p>
                
                <motion.p variants={itemVariants}>
                    At <span>IBM</span>, I migrated 50+ legacy APIs to REST, cut latency by 80% with parallel processing, and earned a <span>VP's Client & Partner Success Award</span> for delivery excellence. My work powered financial transaction systems for major banking clients.
                </motion.p>
                
                <motion.p variants={itemVariants}>
                    Recently, I won <span>1st place at DNATE's hackathon</span> building an AI-powered Medical Science Liaison practice platform in just 48 hours. I love turning complex problems into elegant, scalable solutions.
                </motion.p>
                
                <motion.p variants={itemVariants}>
                    <span>What I bring:</span> 3+ years of Java/Spring Boot expertise, cloud architecture (AWS, GCP, Azure), and the ability to own projects end-to-end — from database design to CI/CD pipelines.
                </motion.p>
                
                <motion.div variants={itemVariants}>
                    <a className='resume' href="https://drive.google.com/file/d/10hP9-vWW1ta2GNATZPwnoUivuZwuaYY5/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                        View my resume →
                    </a>
                </motion.div>
                
                <motion.p variants={itemVariants} className="about-hobbies">
                    <span>Off the keyboard:</span> Manchester City fan ⚽, F1 enthusiast 🏎️, cricket lover 🏏, and still learning the rules of American football. I also referee intramural sports at Northeastern and volunteer at my church's youth ministry.
                </motion.p>
            </div>
        </motion.div>
    );
}

export default About;