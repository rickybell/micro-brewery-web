import React, { Component } from 'react';

const ballGreen = {
  "backgroundColor" : "green"
}

const ballRed = {
  "backgroundColor" : "red"
}

const ballStatus = {
  width: "15px",
  height: "15px",
  borderRadius: "15px"
}

export default class BallStatus extends Component {
  render() {
    const statusClass = this.props.status ? ballGreen : ballRed;
    return (
      <div id="item-id" style={{...ballStatus, ...statusClass}} />
    )
  }
}
