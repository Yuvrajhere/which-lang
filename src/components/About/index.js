import React from "react";

import aboutSvg from "../../assets/about-svg.svg";
import emailPng from "../../assets/email-png.png";
import githubPng from "../../assets/github-png.png";
import twitterPng from "../../assets/twitter-png.png";
import linkedinPng from "../../assets/linkedin-png.png";
import instagramPng from "../../assets/instagram-png.png";

import "./About.css";

import Navbar from "../Navbar";



const About = props => {
  return (
    <div className="About">
      <Navbar />
      <div className="about-content">

        <div className="about-header">
          <h2>
            Here’s some extra info
          </h2>
        </div>

        <div className="about-showcase">
          <div className="showcase-left">
            <p>
              This is just a<a href="https://en.wikipedia.org/wiki/Front-end_web_development"><span> front-end </span></a>project, made to learn and practice my<a href="https://en.wikipedia.org/wiki/Front-end_web_development"><span> front-end </span></a>skills.
            </p>
            <p>
            <a href="https://languagelayer.com/"><span>Language layer API </span></a>is used for processing the input texts and getting the actual result.
            </p>
          </div>
          <img 
            className="showcase-right" 
            src={aboutSvg} 
            alt="about vector art"/>
        </div>

        <div className="about-footer">

          <div className="footer-left">
            <p>
              Designed and developed by<span> Yuvraj Singh Chouhan.</span>
            </p>
            <p>
              Know more about the project in this <a href="https://github.com"><span> github repo.</span></a>
            </p>
          </div>

          <div className="footer-right">
            <a href="mailto: yuvrajisbest13@gmail.com" title="My Email"><img src={emailPng} alt="email"/></a>
            <a href="https://github.com/Yuvrajhere" title="My Github"><img src={githubPng} alt="logo"/></a>
            <a href="https://twitter.com/YuvrajS23650613" title="My Twitter"><img src={twitterPng} alt="logo"/></a>
            <a href="https://www.linkedin.com/in/yuvraj-singh-chouhan-008953147/" title="My LinkedIn"><img src={linkedinPng} alt="logo"/></a>
            <a href="https://instagram.com/yuvraj_singh_c" title="My Instagram"><img src={instagramPng} alt="logo"/></a>
          </div>

        </div>
        
      </div>
    </div>
  )
}

export default About;