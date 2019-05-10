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
    this.reloadData();
    setInterval(this.loadData, 15000);
  }

  async reloadData() {
    console.log("chamou aki");
    try {
      axios
        .get("http://localhost:9000/reload")
        .then(response => {
          console.log(response.data);
          const truck = JSON.parse(response.data);
          const { driver, containers } = truck.document;
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
    return (
      <div className="Main">
        <div className="MainRow" maxLength={255}>
          <h1 id="title">React Dynamic Table</h1>
        </div>
        <div className="MainRow" maxLength={255}>
          {this.renderTableData()}
        </div>
      </div>
    );
  }
}

export default Table;
