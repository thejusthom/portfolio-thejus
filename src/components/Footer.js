import React from 'react';
import '../styles/FooterStyle.css'

export default function Footer() {
  const styleSymbol = {
    fontSize: 20,
    marginRight: 7,
    marginLeft: 7
  }
  return (
    <div className='footer'>
        Made with ❤ by Thejus Thomson <span style={styleSymbol}>©</span> 2024
    </div>
  )
}