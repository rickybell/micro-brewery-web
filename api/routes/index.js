import express from 'express';
import * as mocks from '../__mocks__';
import Simulator from '../src/lib/Simulator';

// var express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(request, response, next) {
  const p = new Promise((resolve, reject) => {
    const simulator = new Simulator({ truck: mocks.truck });
    simulator.run();
    resolve(simulator);
  })
    .then(containers => {
      return containers.export();
    })
    .then(containers => {
      // response.render('index', { title: 'Express' });
      response.write(containers);
      response.end();
    })
    .catch(error => {
      console.log(error);
    });
});

module.exports = router;
