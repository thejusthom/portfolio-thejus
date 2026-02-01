import React from 'react';
import '../styles/FooterStyle.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <div className='footer'>
        Made with ❤️ by Thejus Thomson © {currentYear}
    </div>
  );
}