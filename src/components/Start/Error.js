import React from "react";

import { Link } from "react-router-dom";

import errorSvg from "../../assets/error-svg.svg";

const Error = props => {
  return (
    <div className="Error">
      <h3>Oops. An error occured! - {props.error}</h3>
      <img src={errorSvg} alt="error" />
      <div className="error-links">
        <button className="btn">
          <Link to="/which-lang/start">
            Start
          </Link>
        </button>
        <p className="link">
            <Link to="/which-lang/about">know more
          </Link>
        </p>
      </div>
    </div>
  )
}

export default Error;