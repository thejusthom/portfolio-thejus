import React from 'react';
import { motion } from 'framer-motion';

const CodingIllustration = () => {
  return (
    <svg
      viewBox="0 0 450 600"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="coding-illustration"
    >
      {/* Background glow */}
      <defs>
        <radialGradient id="glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#1e90ff" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#1e90ff" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="screenGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0d1117" />
          <stop offset="100%" stopColor="#161b22" />
        </linearGradient>
        <linearGradient id="blueGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#72c2ff" />
          <stop offset="100%" stopColor="#1e90ff" />
        </linearGradient>
      </defs>

      {/* Ambient glow */}
      <ellipse cx="225" cy="200" rx="200" ry="170" fill="url(#glow)" />

      {/* Monitor Stand */}
      <motion.path
        d="M210 315 L240 315 L235 350 L215 350 Z"
        fill="#2d333b"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      />
      <motion.rect
        x="180"
        y="348"
        width="90"
        height="10"
        rx="5"
        fill="#2d333b"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      />

      {/* Monitor Frame */}
      <motion.rect
        x="50"
        y="60"
        width="350"
        height="260"
        rx="14"
        fill="#2d333b"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.1 }}
      />

      {/* Screen */}
      <motion.rect
        x="64"
        y="74"
        width="322"
        height="230"
        rx="6"
        fill="url(#screenGrad)"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      />

      {/* Terminal Header */}
      <motion.rect
        x="64"
        y="74"
        width="322"
        height="32"
        fill="#21262d"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      />

      {/* Terminal Buttons */}
      <motion.circle cx="86" cy="90" r="7" fill="#f85149" 
        initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.6 }} />
      <motion.circle cx="108" cy="90" r="7" fill="#d29922" 
        initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.7 }} />
      <motion.circle cx="130" cy="90" r="7" fill="#3fb950" 
        initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.8 }} />

      {/* Code Lines - Animated */}
      {/* Line 1 - import statement */}
      <motion.g
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.9 }}
      >
        <rect x="85" y="125" width="50" height="10" rx="3" fill="#ff7b72" />
        <rect x="142" y="125" width="80" height="10" rx="3" fill="#c9d1d9" />
        <rect x="229" y="125" width="40" height="10" rx="3" fill="#ff7b72" />
        <rect x="276" y="125" width="65" height="10" rx="3" fill="#a5d6ff" />
      </motion.g>

      {/* Line 2 - import statement */}
      <motion.g
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.0 }}
      >
        <rect x="85" y="148" width="50" height="10" rx="3" fill="#ff7b72" />
        <rect x="142" y="148" width="60" height="10" rx="3" fill="#c9d1d9" />
        <rect x="209" y="148" width="40" height="10" rx="3" fill="#ff7b72" />
        <rect x="256" y="148" width="90" height="10" rx="3" fill="#a5d6ff" />
      </motion.g>

      {/* Line 3 - empty */}
      
      {/* Line 4 - function declaration */}
      <motion.g
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.1 }}
      >
        <rect x="85" y="181" width="65" height="10" rx="3" fill="#d2a8ff" />
        <rect x="157" y="181" width="95" height="10" rx="3" fill="#7ee787" />
        <rect x="259" y="181" width="20" height="10" rx="3" fill="#c9d1d9" />
        <rect x="286" y="181" width="12" height="10" rx="3" fill="#ffa657" />
      </motion.g>

      {/* Line 5 - const */}
      <motion.g
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.2 }}
      >
        <rect x="105" y="204" width="48" height="10" rx="3" fill="#ff7b72" />
        <rect x="160" y="204" width="70" height="10" rx="3" fill="#c9d1d9" />
        <rect x="237" y="204" width="14" height="10" rx="3" fill="#c9d1d9" />
        <rect x="258" y="204" width="85" height="10" rx="3" fill="#a5d6ff" />
      </motion.g>

      {/* Line 6 - return */}
      <motion.g
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.3 }}
      >
        <rect x="105" y="227" width="58" height="10" rx="3" fill="#ff7b72" />
        <rect x="170" y="227" width="20" height="10" rx="3" fill="#c9d1d9" />
      </motion.g>

      {/* Line 7 - JSX */}
      <motion.g
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.4 }}
      >
        <rect x="125" y="250" width="18" height="10" rx="3" fill="#c9d1d9" />
        <rect x="150" y="250" width="65" height="10" rx="3" fill="#7ee787" />
        <rect x="222" y="250" width="95" height="10" rx="3" fill="#a5d6ff" />
        <rect x="324" y="250" width="18" height="10" rx="3" fill="#c9d1d9" />
      </motion.g>

      {/* Line 8 - closing */}
      <motion.g
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.5 }}
      >
        <rect x="125" y="273" width="58" height="10" rx="3" fill="#c9d1d9" />
      </motion.g>

      {/* Cursor blink */}
      <motion.rect
        x="190"
        y="273"
        width="10"
        height="14"
        fill="#58a6ff"
        animate={{ opacity: [1, 0, 1] }}
        transition={{ duration: 1, repeat: Infinity }}
      />

      {/* Floating elements */}
      {/* Bracket left */}
      <motion.text
        x="15"
        y="160"
        fill="url(#blueGrad)"
        fontSize="40"
        fontFamily="Fira Code, monospace"
        fontWeight="bold"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 0.6, y: 0 }}
        transition={{ delay: 1.6 }}
      >
        {'{'}
      </motion.text>

      {/* Bracket right */}
      <motion.text
        x="420"
        y="240"
        fill="url(#blueGrad)"
        fontSize="40"
        fontFamily="Fira Code, monospace"
        fontWeight="bold"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 0.6, y: 0 }}
        transition={{ delay: 1.7 }}
      >
        {'}'}
      </motion.text>

      {/* Slash */}
      <motion.text
        x="400"
        y="110"
        fill="url(#blueGrad)"
        fontSize="28"
        fontFamily="Fira Code, monospace"
        fontWeight="bold"
        initial={{ opacity: 0, rotate: -10 }}
        animate={{ opacity: 0.5, rotate: 0 }}
        transition={{ delay: 1.8 }}
      >
        {'</>'}
      </motion.text>

      {/* Dots decoration */}
      <motion.g
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ delay: 1.9 }}
      >
        <circle cx="25" cy="320" r="4" fill="#1e90ff" />
        <circle cx="45" cy="335" r="3" fill="#1e90ff" />
        <circle cx="30" cy="350" r="5" fill="#1e90ff" />
        
        <circle cx="420" cy="310" r="3" fill="#1e90ff" />
        <circle cx="435" cy="330" r="4" fill="#1e90ff" />
        <circle cx="415" cy="345" r="3" fill="#1e90ff" />
      </motion.g>

    </svg>
  );
};

export default CodingIllustration;