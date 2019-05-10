import express from 'express';
import * as mocks from '../__mocks__';
import Simulator from '../src/lib/Simulator';
import { Truck, Driver } from '../src/odms';
import CollectionODM from '../src/lib/CollectionODM';

// var express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(request, response, next) {
  const p = new Promise((resolve, reject) => {
    response.setHeader('Content-Type', 'application/json');
    const simulator = new Simulator({ 
      truck: new Truck({
        containers: new CollectionODM([]),
        driver: new Driver({ name: "Shane"})
    })
    });
    simulator.starting();
    resolve(simulator);
  })
    .then(containers => {
      return containers.export();
    })
    .then(containers => {
      // response.write(JSON.stringify(containers));
      response.end(JSON.stringify(containers));
    })
    .catch(error => {
      console.log(error);
    });
});

module.exports = router;
