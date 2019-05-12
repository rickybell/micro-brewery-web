import React, { Component } from "react";
import Status from "./Status";


export default class CardBeer extends Component {
  render() {
    return (
      <div style={card}>
        <div style={cardHeader}>
          <p style={cardText}>Container : {this.props.name}</p>
        </div>
        <div>
          <div style={cardBody}>
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

const card  ={
  bordeWidth: "1px",
  boxShadow: "1px 5px 5px grey",
  borderStyle: "solid",
  borderColor: "gray",
  marginBottom: "15px",
  borderRadius: "15px",
  backgroundColor: "darkgray",
}
const cardBody = {
  borderTopColor: "gray",
  borderTopWidth: "1px",
  borderTopStyle: "solid",
  marginTop: "10px",
  padding: "10px",
}
const cardHeader = {
  alignItems: "flex-start",
  textAlign: "left",
  paddingLeft: "15px",
  fontWeight: "bold",
  textAlign: "left",
}
const cardCell = {
  margin: "10px",
  display: "flex",
  flexDirection: "row",
  justifyContent: "center"
}
const cardText = {
  fontSize: "18px"
}
