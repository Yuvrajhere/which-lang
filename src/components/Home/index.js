import React from "react";
import { Link } from "react-router-dom";

import homeSvg from "../../assets/home-svg.svg";

import "./Home.css";

import Navbar from "../Navbar";

const Home = props => {
  return (
    <div className="Home">
      <Navbar />
      <div className="home-content">
        <div className="home-content-left">
          <h1>WhichLang?</h1>
          <p>
            You give the texts,<br />
            we guess the language!
          </p>

          <button className="btn">
            <Link to="https://yuvrajhere.github.io/whichlang/start">
              Start
            </Link>
          </button>

          <p className="link">
            <Link to="https://yuvrajhere.github.io/whichlang/about">know more
          </Link>
          </p>
        </div>
        <div className="home-content-right">
          <img src={homeSvg} alt="home vector art" />
        </div>
      </div>
    </div>
  )
}

export default Home;