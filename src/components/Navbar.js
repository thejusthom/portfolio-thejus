import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../styles/NavBarStyle.css";
import { Link } from "react-scroll";
import {
  FaGithub,
  FaLinkedin,
  FaBars,
  FaEnvelope,
  FaCopy,
} from "react-icons/fa";

export default function Navbar() {
  const [click, setClick] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const open  = () => setClick(true);
  const close = () => setClick(false);

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

  // Animation variants
  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.2 } },
    exit:   { opacity: 0, transition: { duration: 0.2 } }
  };

  const menuVariants = {
    hidden:  { opacity: 0, y: -12 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.25, ease: "easeOut" }
    },
    exit: {
      opacity: 0,
      y: -12,
      transition: { duration: 0.2, ease: "easeIn" }
    }
  };

  const itemVariants = {
    hidden:  { opacity: 0, x: -16 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.06, duration: 0.25, ease: "easeOut" }
    })
  };

  const navItems = [
    { label: "Timeline", to: "timeline" },
    { label: "Projects", to: "project"  },
    { label: "About",    to: "about"    },
    { label: "Skills",   to: "skills"   },
  ];

  return (
    <div className="nav-container">
      <nav className="header">

        {/* ── Logo ── */}
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

        {/* ── Desktop vertical nav ── */}
        <ul className="nav-menu">
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

        {/* ── Social icons ── */}
        <div className="social-links">
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

        {/* ── Hamburger (mobile only) ── */}
        <button
          className="hamburger"
          onClick={open}
          aria-label="Open menu"
        >
          <FaBars className="bars" size={22} />
        </button>
      </nav>

      {/* ── Mobile menu with Framer Motion ── */}
      <AnimatePresence>
        {click && (
          <>
            {/* Backdrop */}
            <motion.div
              className="mobile-backdrop"
              onClick={close}
              variants={backdropVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            />

            {/* Menu panel */}
            <motion.div
              className="mobile-menu"
              variants={menuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <ul>
                {navItems.map((item, i) => (
                  <motion.li
                    key={item.to}
                    custom={i}
                    variants={itemVariants}
                    initial="hidden"
                    animate="visible"
                  >
                    <Link
                      className="navLink"
                      to={item.to}
                      spy={true}
                      smooth={true}
                      duration={30}
                      onClick={close}
                    >
                      {item.label}
                    </Link>
                  </motion.li>
                ))}
              </ul>

              {/* Social icons at bottom of mobile menu */}
              <motion.div
                className="mobile-menu-socials"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { delay: 0.3 } }}
              >
                <button className="social-btn" onClick={handleEmailClick} aria-label="Send email">
                  <FaEnvelope className="social" size={20} />
                </button>
                <button className="social-btn" onClick={copyToClipboard} aria-label="Copy email">
                  <FaCopy className="social" size={20} />
                </button>
                <a href="https://linkedin.com/in/thejusthomson/" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin className="social" size={20} />
                </a>
                <a href="https://github.com/thejusthom" target="_blank" rel="noopener noreferrer">
                  <FaGithub className="social" size={20} />
                </a>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {showToast && (
        <div className="toast">
          Email ID copied!
        </div>
      )}
    </div>
  );
}