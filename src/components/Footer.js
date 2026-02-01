import React from 'react';
import '../styles/FooterStyle.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <div className='footer'>
        <span>Made with ❤️ by Thejus Thomson</span>
        <span className="footer-divider">•</span>
        <span>© {currentYear}</span>
    </div>
  );
}