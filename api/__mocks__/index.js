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

export const importedCollection = `[{"document":{"tempature":-1,"max":-4,"min":-6,"status":false,"type":"pilsnercontainer","name":"PilsnerContainer","_id":"0.30950533601439867"}},{"document":{"tempature":0,"max":-6,"min":-8,"status":false,"type":"stoutcontainer","name":"StoutContainer","_id":"0.2839740785097704"}}]`;

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
export const driver = new Driver({ driver_name: 'Jess' });

export const containers = {
  setOfItems : 
    [
      pilsnerContainer,
      iPAContainer,
      largerContainer1,
      largerContainer2,
      paleAleContainer,
      wheatBeerContainer1,
      wheatBeerContainer2,
      stoutContainer
    ]
};

global.Math.random = () => 0.10452300523737645;
export const truck = new Truck({
  driver,
  containers
});

export const truckExported = `{"document":{"driver":{"document":{"driver_name":"Jess","type":"driver","name":"Driver","_id":"0.6772379383101226"}},"containers":{"setOfItems":[{"document":{"tempature":-5,"max":-4,"min":-6,"status":true,"type":"pilsnercontainer","name":"PilsnerContainer","_id":"0.3423085298899706"}},{"document":{"tempature":-7,"max":-5,"min":-6,"status":false,"type":"ipacontainer","name":"IPAContainer","_id":"0.685074893303429"}},{"document":{"tempature":-8,"max":-7,"min":-4,"status":false,"type":"largercontainer","name":"LargerContainer","_id":"0.6198471573013231"}},{"document":{"tempature":-5,"max":-7,"min":-4,"status":false,"type":"largercontainer","name":"LargerContainer","_id":"0.8279407422276885"}},{"document":{"tempature":-4,"max":-4,"min":-6,"status":true,"type":"palealecontainer","name":"PaleAleContainer","_id":"0.5925379237304513"}},{"document":{"tempature":-2,"max":-3,"min":-5,"status":false,"type":"wheatbeercontainer","name":"WheatBeerContainer","_id":"0.5074789825831276"}},{"document":{"tempature":-4,"max":-3,"min":-5,"status":true,"type":"wheatbeercontainer","name":"WheatBeerContainer","_id":"0.646902950863687"}},{"document":{"tempature":-7,"max":-6,"min":-8,"status":true,"type":"stoutcontainer","name":"StoutContainer","_id":"0.9246002326018194"}}]},"type":"truck","name":"Truck","_id":"0.10452300523737645"}}`;

export const simulatedContainers = `{"driver":{"document":{"name":"Jess","type":"driver","_id":"0.6772379383101226"}},"containers":[{"document":{"tempature":-1,"max":-4,"min":-6,"status":false,"type":"pilsnercontainer","_id":"0.3423085298899706"}},{"document":{"tempature":-9,"max":-5,"min":-6,"status":false,"type":"ipacontainer","_id":"0.685074893303429"}},{"document":{"tempature":-10,"max":-7,"min":-4,"status":false,"type":"largercontainer","_id":"0.6198471573013231"}},{"document":{"tempature":-7,"max":-7,"min":-4,"status":false,"type":"largercontainer","_id":"0.8279407422276885"}},{"document":{"tempature":-6,"max":-4,"min":0,"status":false,"type":"palealecontainer","_id":"0.5925379237304513"}},{"document":{"tempature":-4,"max":-3,"min":0,"status":false,"type":"wheatbeercontainer","_id":"0.5074789825831276"}},{"document":{"tempature":-6,"max":-3,"min":0,"status":false,"type":"wheatbeercontainer","_id":"0.646902950863687"}},{"document":{"tempature":-9,"max":-6,"min":0,"status":false,"type":"stoutcontainer","_id":"0.9246002326018194"}}],"type":"truck","_id":"0.10452300523737645"}`;
