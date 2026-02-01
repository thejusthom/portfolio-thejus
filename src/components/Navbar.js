import React, { useState } from "react";
import "../styles/NavBarStyle.css";
import { Link } from "react-scroll";
import {
  FaGithub,
  FaLinkedin,
  FaBars,
  FaTimes,
  FaEnvelope,
  FaCopy,
} from "react-icons/fa";

export default function Navbar() {
  const [click, setClick] = useState(false);
  const [showToast, setShowToast] = useState(false);
  
  const handleCLick = () => setClick(!click);

  const handleEmailClick = () => {
    const emailDetails = {
      address: 'thomson.th@northeastern.edu',
      subject: 'Getting in touch',
      body: `Hi Thejus,\n\nI came across your portfolio and would like to connect.\n\nBest regards,`
    };

    const mailtoLink = `mailto:${emailDetails.address}?subject=${encodeURIComponent(emailDetails.subject)}&body=${encodeURIComponent(emailDetails.body)}`;
    window.location.href = mailtoLink;
  };

  const copyToClipboard = () => {
    const contactInfo = `thomson.th@northeastern.edu`.trim();

    navigator.clipboard.writeText(contactInfo)
      .then(() => {
        setShowToast(true);
        setTimeout(() => setShowToast(false), 2000);
      })
      .catch(err => console.error('Failed to copy:', err));
  };

  return (
    <div className="nav-container">
      <nav className="header">
        <div className="logo">
          <Link 
            activeClass="active"
            to="home"
            spy={true}
            smooth={true}
            duration={30}
          >
            <div className="logo-img">
              <span className="blink">&lt;</span>
              <span>&#47;</span>TT<span className="blink">&gt;</span>
            </div>
          </Link>
        </div>

        <ul className={click ? "nav-menu active" : "nav-menu"} onClick={handleCLick}>
          <li>
            <Link
              className="navLink"
              activeClass="active"
              to="timeline"
              spy={true}
              smooth={true}
              duration={30}
            >Timeline</Link>
          </li>
          <li>
            <Link
              className="navLink"
              activeClass="active"
              to="project"
              spy={true}
              smooth={true}
              duration={30}
            >Projects</Link>
          </li>
          <li>
            <Link
              className="navLink"
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              duration={30}
            >About</Link>
          </li>
          <li>
            <Link
              className="navLink" 
              activeClass="active"
              to="skills"
              spy={true}
              smooth={true}
              duration={30}
            >Skills</Link>
          </li>
        </ul>

        <div className={click ? "social-links active" : "social-links"}>
          <button
            className="social-btn"
            onClick={handleEmailClick}
            aria-label="Send email"
          >
            <FaEnvelope className="social" size={25} />
          </button>
          <button
            className="social-btn"
            onClick={copyToClipboard}
            aria-label="Copy contact info"
          >
            <FaCopy className="social" size={25} />
          </button>
          <a
            href="https://linkedin.com/in/thejusthomson/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="social" size={25} />
          </a>
          <a
            href="https://github.com/thejusthom"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="social" size={25} />
          </a>
        </div>

        <div className="hamburger" onClick={handleCLick}>
          {click ? (
            <FaTimes className="bars" size={25} />
          ) : (
            <FaBars className="bars" size={25} />
          )}
        </div>
      </nav>

      {showToast && (
        <div className="toast">
          Email ID copied!
        </div>
      )}
    </div>
  );
}