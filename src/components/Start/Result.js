import React from "react";

const Result = props => {
  return (
    <div className="Result">
      <h3>This is the information we created for your text<br /> <span>{props.text}</span></h3>
      <table>
        <tbody>
          <tr className="table-head">
            <th>Language name</th>
            <th>Probability</th>
            <th>Percentage</th>
            <th>Reliable</th>
          </tr>
          {
            props.result.map(item => {
              return (
                <tr>
                  <td>{item.language_name}</td>
                  <td>{Math.round(item.probability)}</td>
                  <td>{Math.round(item.percentage)}</td>
                  <td>{(item.reliable_result) ? "YES" : "NO"}</td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
      <p>The information is taken from <a href="https://languagelayer.com/"><span>Language layer API </span></a></p>
    </div>
  )
}

export default Result;