import React, { Component } from "react";
import BallStatus from "./BallStatus"

export default class Status extends Component {
  render() {
    return (
      <div style={status}>
        <div style={statusColumn}>
          <p>Max: {this.props.max}</p>
          <p>Min: {this.props.min}</p>
        </div>
        <div style={statusColumn}>
          <p>Temp: {this.props.tempature}</p>
        </div>
        <div
          style={{ ...statusColumn, ...statusCell}}
        >
          <p style={text}>Status: {this.props.status ? "OK" : "FAIL"} </p>
          <p>
            <BallStatus status={this.props.status}/>
          </p>
        </div>
      </div>
    );
  }
}

const status = {
  display: "flex",
  justifyContent: "center",
  alignItems: "flex-start",
  flexDirection: "row",
  columns: "3 auto",
  width: "100%"
}
const statusColumn = {
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  alignItems: "center",
  padding: "0px",
  margin: "0px",
  width: "33%"
}

const statusCell = {
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  alignItems: "center",
  paddingTop: "10px"
}

const text = {
  padding: "0px",
  margin: "5px",
  textAlign: "center"
}
