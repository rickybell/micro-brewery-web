// import express from 'express'
var express = require('express');
var router = express.Router();
import app from '../utils/app';
import Simulator from '../src/lib/Simulator';
router.get('/', function(request, response, next) {
  let truck = app.get('truck');
  let { driver, containers } = truck.document.truck;
  const p = new Promise((resolve, reject) => {

    const simulator = new Simulator({ truck: truck.document.truck });
    response.setHeader('Content-Type', 'application/json');
    simulator.run();
    resolve(simulator);

  })
    .then(reloadedTruck => {
      app.set('truck', reloadedTruck);
      return reloadedTruck.truck.export();
    })
    .then(reloadedTruck => {

      response.write(JSON.stringify(reloadedTruck));
      response.end();

    })
    .catch(error => {

      console.log(error);

    });
});
module.exports = router;
