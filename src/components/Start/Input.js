import React, {useState} from "react";

import startSvg from "../../assets/start-svg.svg";

const Input = props => {
  const [currentInputText, setCurrentInputText] = useState("");

  const onInputChange = e => {
    setCurrentInputText(e.target.value);
    console.log(currentInputText);
  }

  const handleCheckClick = e => {
    e.preventDefault();
    if(currentInputText.length <= 0) {
      alert("please enter some text");
    } else {
      console.log(currentInputText);
      props.handleSubmit(currentInputText);
      setCurrentInputText("");
      console.log("check button clicked!");
    }
  }

  return (
    <div className="Input">
      <h3>Give us the text from any written language,
        <br/>Other than English.</h3>
      <div className="input-showcase">
        <div className="input-showcase-left">
          <textarea maxLength="140" onChange={onInputChange} value={currentInputText} placeholder="Enter text here!" rows="4" cols="50"></textarea>
          <button className="btn" onClick={handleCheckClick}>Submit</button>
        </div>
        <img src={startSvg} alt="" className="input-showcase-right" />
      </div>
    </div>
  )
}

export default Input;