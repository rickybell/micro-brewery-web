import React, { Component } from "react";
import "./Status.css";

export default class Status extends Component {
  render() {
    const statusClass = this.props.status ? " BallGreen" : " BallRed";
    return (
      <div className="Status">
        <div className="StatusColumn">
          <p>Max: {this.props.max}</p>
          <p>Min: {this.props.min}</p>
        </div>
        <div className="StatusColumn">
          <p>Temp: {this.props.tempature}</p>
        </div>
        <div
          // className="StatusColumn"
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
            paddingTop: "10px"
          }}
        >
          <p>Status: {this.props.status ? "OK" : "FAIL"} </p>
          <p>
            <div className={`BallStatus ${statusClass}`} />
          </p>
        </div>
      </div>
    );
  }
}
