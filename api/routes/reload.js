// import express from 'express'
var express = require('express');
var router = express.Router();
import app from '../utils/app';
import Simulator from '../src/lib/Simulator';
router.get('/', function(request, response, next) {
  let truck = app.get('truck');
  console.log('get truck', truck);
  const p = new Promise((resolve, reject) => {
    const simulator = new Simulator({ truck: truck });

    response.setHeader('Content-Type', 'application/json');
    console.log('truck reload', truck);
    truck = simulator.execute();
    resolve(truck);
  })
    .then(reloadedTruck => {
      App.set('truck', reloadedTruck);
      return reloadedTruck.export();
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
