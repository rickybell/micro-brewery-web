import React, { Component } from 'react'
import { Card, CardBody } from "react-simple-card";
import CardBeer from "./CardBeer";
import { TruckContext } from '../components/Main';

export default class List extends Component {
  render() {
    return (
        <TruckContext.Consumer>
            {({ containers }) => {
                if (containers !== undefined) {
                    return containers.setOfItems.map((container, index) => {
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
            }}
        </TruckContext.Consumer> 
    )
  }
}
