// eslint-disable-next-line import/prefer-default-export

import {
  PilsnerContainer,
  IPAContainer,
  LargerContainer,
  WheatBeerContainer,
  StoutContainer,
  PaleAleContainer,
  Truck,
  Driver
} from '../src/odms';

export const importedCollection = `[{"document":{"tempature":-1,"type":"pilsnercontainer","_id":"0.30950533601439867"}},{"document":{"tempature":0,"type":"stoutcontainer","_id":"0.2839740785097704"}}]`;

global.Math.random = () => 0.3423085298899706;
export const pilsnerContainer = new PilsnerContainer({ tempature: -5, min: -6, max: -4 });
global.Math.random = () => 0.685074893303429;
export const iPAContainer = new IPAContainer({ tempature: -7, min: -6, max: -5 });
global.Math.random = () => 0.6198471573013231;
export const largerContainer1 = new LargerContainer({ tempature: -8, min: -4, max: -7 });
global.Math.random = () => 0.8279407422276885;
export const largerContainer2 = new LargerContainer({ tempature: -5, min: -4, max: -7 });
global.Math.random = () => 0.5925379237304513;
export const paleAleContainer = new PaleAleContainer({ tempature: -4, mim: -6, max: -4 });
global.Math.random = () => 0.5074789825831276;
export const wheatBeerContainer1 = new WheatBeerContainer({ tempature: -2, mim: -5, max: -3 });
global.Math.random = () => 0.646902950863687;
export const wheatBeerContainer2 = new WheatBeerContainer({ tempature: -4, mim: -5, max: -3 });
global.Math.random = () => 0.9246002326018194;
export const stoutContainer = new StoutContainer({ tempature: -7, mim: -8, max: -6 });
global.Math.random = () => 0.6772379383101226;
export const driver = new Driver({ name: 'Jess' });

export const containers = [
  pilsnerContainer,
  iPAContainer,
  largerContainer1,
  largerContainer2,
  paleAleContainer,
  wheatBeerContainer1,
  wheatBeerContainer2,
  stoutContainer
];

global.Math.random = () => 0.10452300523737645;
export const truck = new Truck({
  driver,
  containers
});

export const truckExported = `{"driver":{"document":{"name":"Jess","type":"driver","_id":"0.6772379383101226"}},"containers":[{"document":{"tempature":-5,"min":-6,"max":-4,"type":"pilsnercontainer","_id":"0.3423085298899706"}},{"document":{"tempature":-7,"min":-6,"max":-5,"type":"ipacontainer","_id":"0.685074893303429"}},{"document":{"tempature":-8,"min":-4,"max":-7,"type":"largercontainer","_id":"0.6198471573013231"}},{"document":{"tempature":-5,"min":-4,"max":-7,"type":"largercontainer","_id":"0.8279407422276885"}},{"document":{"tempature":-4,"mim":-6,"max":-4,"type":"palealecontainer","_id":"0.5925379237304513"}},{"document":{"tempature":-2,"mim":-5,"max":-3,"type":"wheatbeercontainer","_id":"0.5074789825831276"}},{"document":{"tempature":-4,"mim":-5,"max":-3,"type":"wheatbeercontainer","_id":"0.646902950863687"}},{"document":{"tempature":-7,"mim":-8,"max":-6,"type":"stoutcontainer","_id":"0.9246002326018194"}}],"type":"truck","_id":"0.10452300523737645"}`;

export const simulatedContainers = `{"driver":{"document":{"name":"Jess","type":"driver","_id":"0.6772379383101226"}},"containers":[{"document":{"tempature":-1,"min":-6,"max":-4,"type":"pilsnercontainer","_id":"0.3423085298899706"}},{"document":{"tempature":-9,"min":-6,"max":-5,"type":"ipacontainer","_id":"0.685074893303429"}},{"document":{"tempature":-10,"min":-4,"max":-7,"type":"largercontainer","_id":"0.6198471573013231"}},{"document":{"tempature":-7,"min":-4,"max":-7,"type":"largercontainer","_id":"0.8279407422276885"}},{"document":{"tempature":0,"mim":-6,"max":-4,"type":"palealecontainer","_id":"0.5925379237304513"}},{"document":{"tempature":0,"mim":-5,"max":-3,"type":"wheatbeercontainer","_id":"0.5074789825831276"}},{"document":{"tempature":0,"mim":-5,"max":-3,"type":"wheatbeercontainer","_id":"0.646902950863687"}},{"document":{"tempature":-3,"mim":-8,"max":-6,"type":"stoutcontainer","_id":"0.9246002326018194"}}],"type":"truck","_id":"0.10452300523737645"}`;
