import React from "react";
import {connect} from "react-redux";

import Navbar from "../Navbar";
import Input from "./Input";
import Loading from "./Loading";
import Error from "./Error";
import Result from "./Result";

import {handleSubmit} from "../../actions";
import "./Start.css";

const mapStateToProps = state => {
  return {
    ...state,
  }
}

const Start = props => {
  return (
    <div className="Start">
      <Navbar />
      {(props.isInputPage) ? <Input handleSubmit={props.handleSubmit}/> : null}
      {(props.isLoading) ? <Loading /> : null}
      {(props.error) ? <Error error={props.error}/> : null}
      {(props.result.length > 0) ? <Result text={props.text} result={props.result}/> : null}
    </div>
  )
}

export default connect(mapStateToProps, {handleSubmit})(Start);