import React from 'react';
import "../styles/HomeBannerStyle.css";
import Typewriter from "./Typewriter"

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
              <Typewriter/>
              <a className='btn' href="https://linkedin.com/in/thejusthomson/" target="_blank" rel="noopener noreferrer">Hire Me</a>
            </div>
        </div>
        {/* <div className="mask">
            <img className='bg' alt="girl-with-laptop" />
        </div> */}
    </div>
  )
}