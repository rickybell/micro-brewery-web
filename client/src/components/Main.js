import React, { Component } from "react";
import axios from "axios";
import "./Main.css";
import { Card, CardBody } from "react-simple-card";
import CardBeer from "./CardBeer";
class Table extends Component {
  constructor(props) {
    super(props);
    this.state = {
      truck: {}
    };
  }

  callAPI() {
    try {
      axios
        .get("http://localhost:9000/")
        .then(response => {
          const truck = JSON.parse(response.data);
          const { driver, containers } = truck.document;
          this.setState({ driver, containers });
        })
        .catch(error => {
          throw error;
        });
    } catch (error) {
      console.warn(error);
    }
  }

  componentWillMount() {
    this.callAPI();
  }

  componentDidMount() {
    console.log('componentDidMount')
    setInterval(this.reloadData.bind(this), 5000);
  }

  reloadData() {
    console.log("chamou aki", this.state.truck.containers);
    try {
      axios
        .get("http://localhost:9000/reload")
        .then(response => {
          const truck = JSON.parse(response.data);
          const { driver, containers } = truck;
          this.setState({ driver, containers });
        })
        .catch(error => {
          throw error;
        });
    } catch (e) {
      console.log(e);
    }
  }

  renderTableData() {
    if (this.state.containers !== undefined) {
      return this.state.containers.setOfItems.map((container, index) => {
        const { name, tempature, max, min, status } = container.document;
        return (
          <CardBeer
            key={index}
            name={name}
            tempature={tempature}
            min={min}
            max={max}
            status={status}
          />
        );
      });
    } else {
      return (
        <Card key={0}>
          <CardBody>{"waiting"}</CardBody>
        </Card>
      );
    }
  }

  render() {
    let driver_name = null;
    if (this.state.driver !== undefined) {
      driver_name = this.state.driver.document.driver_name
    }
    console.log('driver_name', driver_name)
    return (
      <div className={"Main"}>
        <div className={"MainRowHeader"}>
          <div className={"Title"}><p>Micro Brewery</p></div>
          <div className={"Driver"}><p>Driver: {driver_name}</p></div> 
        </div>
        <div className={"MainRow"}>
          {this.renderTableData()}
        </div>
      </div>
    );
  }
}

export default Table;
