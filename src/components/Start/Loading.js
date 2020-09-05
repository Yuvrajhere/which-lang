import React from "react";

import loadingGif from "../../assets/loading-gif.gif";

const Loading = props => {
  return (
    <div className="Loading">
      <h3>Just a second</h3>
      <img src={loadingGif} alt="loading..."/>
    </div>
  )
}

export default Loading;