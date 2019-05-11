import React, { Component } from "react";
import Status from "./Status";
import styles from "./CardBeer.css";

export default class CardBeer extends Component {
  render() {
    return (
      <div className={"Card"}>
        <div className={"CardHeader"}>
          <p className={"CardText"}>Container : {this.props.name}</p>
    
        </div>
        <div>
          <div className={"CardBody"}>
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
