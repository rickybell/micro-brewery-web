import express from 'express';
import Simulator from '../src/lib/Simulator';
import { Truck, Driver } from '../src/odms';
import CollectionODM from '../src/lib/CollectionODM';
import app from '../utils/app';

const router = express.Router();

/* GET home page. */
router.get('/', function(request, response, next) {
  const p = new Promise((resolve, reject) => {
    response.setHeader('Content-Type', 'application/json');
    const simulator = new Simulator({
      truck: new Truck({
        driver: new Driver({ name: 'Shane' }),
        containers: new CollectionODM([])
      })
    });
    simulator.starting();
    resolve(simulator);
  })
    .then(truck => {
      app.set('truck', truck);
      return truck.export();
    })
    .then(truck => {
      response.write(JSON.stringify(truck));
      response.end();
    })
    .catch(error => {
      console.log(error);
    });
});

module.exports = router;
