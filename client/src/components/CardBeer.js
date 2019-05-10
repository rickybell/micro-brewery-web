import React, { Component } from "react";
import Status from "./Status";
import "./CardBeer.css";

export default class CardBeer extends Component {
  render() {
    return (
      <div className="Card">
        <div className="CardHeader">
          <h2>Container : {this.props.name}</h2>
        </div>
        <div>
          <div className="CardBody">
            <Status
              min={this.props.min}
              max={this.props.max}
              tempature={this.props.tempature}
              status={this.props.status}
            />
          </div>
        </div>
      </div>
    );
  }
}
