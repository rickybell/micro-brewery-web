import React, { Component } from "react";
import axios from "axios";
import List from "./List";
export const TruckContext = React.createContext('truck')

class Table extends Component {
  constructor(props) {
    super(props);
    this.state = {
      truck: {}
    };
  }

  async getApiData() {
    try {
      return axios
        .get("http://localhost:9000/")
        .then(response => {
          const truck = JSON.parse(response.data);
          const { driver, containers } = truck.document;
          return { driver, containers };
        })
        .catch(error => {
          throw error;
        });
    } catch (error) {
      console.warn(error);
    }
  }

  async componentWillMount () {
    this.getApiData().then((result) =>{
      const {driver, containers} = result
      this.setState({ driver , containers });
    })
  }

  componentDidMount() {
    setInterval(this.reloadData.bind(this), 5000);
  }

  reloadData() {
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

  render() {
    let driver_name = null;
    if (this.state.driver !== undefined) {
      driver_name = this.state.driver.document.driver_name
    }
    const contextValues = {
      driver: this.state.driver,
      containers: this.state.containers
    }
    return (
      <TruckContext.Provider value={contextValues} >
        <div style={main}>
          <div style={mainRowHeader}>
            <div style={headerCell}><p style={title}>Micro Brewery</p></div>
            <div style={{ ...headerCell, ...driver}}>
              <p style={driverText}>Driver: {driver_name}</p>
            </div> 
          </div>
          <div>
            <List />
          </div>
        </div>
      </TruckContext.Provider>
    );
  }
}

const main = {
  textAlign: "center",
  marginLeft: "20%",
  marginRight: "20%",
  borderWidth: "1px",
  borderColor: "gray",
  marginBottom: "15px",
  borderStyle: "outset",
  borderRadius: "15px",
  paddingLeft: "5px",
  paddingRight: "5px",
  marginPop: "5px",
  boxShadow: "1px 5px 5px grey",
  backgroundColor: "lightgrey"
}

const mainRowHeader = {
  display: "flex"
}

const headerCell = {
  width: "50%"
}

const MainRowHeaderDiv = {
  width: "50%",
  float: "left"
}
const driver = {
  textAlign: "right"
}
const driverText = {
  marginTop: "30px",
  fontSize: "18px",
  paddingRight: "5px",
  fontWeight: "bold"
}
const title = {
  marginTop: "25px",
  fontSize: "24px",
  textAlign: "left",
  fontWeight: "bold",
  paddingLeft: "5px",
  fontStyle: "italic",
}

export default Table;
