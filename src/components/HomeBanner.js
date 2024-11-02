import React from 'react';
import "../styles/HomeBannerStyle.css";
// import cartoon from "../images/cartoon-compressed.png";

export default function Banner({id}) {
  return (
    <div className="home" id={id}> 
        <div className='content'>
            <div className="wrapper">
              <div className="name">Thejus Thomson</div>
              <div className="staticTitle">
                Developer
                <div className='hrLine'></div>
              </div>
              <ul className="dynamicTitle">
                <li>+<span>Frontend</span></li>
              </ul>
              <a className='btn' href="https://www.linkedin.com/in/thejusthomson/" target="_blank" rel="noopener noreferrer">Hire Me</a>
            </div>
        </div>
        <div className="mask">
            <img className='bg' alt="girl-with-laptop" />
        </div>
    </div>
  )
}