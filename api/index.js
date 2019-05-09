#! /usr/bin/env node

import {
  PilsnerContainer,
  StoutContainer,
  IPAContainer,
  LargerContainer,
  PaleAleContainer,
  WheatBeerContainer
} from './src/odms';
import CollectionODM from './src/lib/CollectionODM';

const bigTruckOfBrewery = new CollectionODM([
  new PilsnerContainer({ tempature: -5, min: -6, max: -4 }),
  new IPAContainer({ tempature: -7, min: -6, max: -5 }),
  new LargerContainer({ tempature: -8, min: -4, max: -7 }),
  new LargerContainer({ tempature: -5, min: -4, max: -7 }),
  new PaleAleContainer({ tempature: -4, mim: -6, max: -4 }),
  new WheatBeerContainer({ tempature: -2, mim: -5, max: -3 }),
  new WheatBeerContainer({ tempature: -4, mim: -5, max: -3 }),
  new StoutContainer({ tempature: -7, mim: -8, max: -6 })
]);

console.log(bigTruckOfBrewery.export());
