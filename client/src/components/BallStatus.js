import React, { Component } from 'react'
import './BallStatus.css'

export default class BallStatus extends Component {
  render() {
    const statusClass = this.props.status ? " BallGreen" : " BallRed";
    return (
        <div className={`BallStatus ${statusClass}`} />
    )
  }
}
